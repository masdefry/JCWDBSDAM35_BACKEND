import { User } from '../generated/prisma';
import prisma from '../config/prisma-client';
import bcrypt from 'bcrypt';
import { jwtSign } from '../utils/jwt-sign';

export async function registerService({
  fullName,
  email,
  password,
  phoneNumber,
}: Pick<User, 'fullName' | 'email' | 'password' | 'phoneNumber'>) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    },
  });
}

export async function loginService({
  email,
  password,
}: Pick<User, 'email' | 'password'>) {
  const findUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!findUser) throw new Error('User not found');

  const isComparePassword = await bcrypt.compare(password, findUser?.password);

  if (!isComparePassword) throw new Error('Invalid password account');

  const { password: _, ...safeUser } = findUser;

  const token = jwtSign(
    { userId: findUser?.id, role: findUser?.role },
    process.env.JWT_SECRET_KEY!,
    { expiresIn: '1d' }
  );

  return {
    safeUser,
    token,
  };
}
