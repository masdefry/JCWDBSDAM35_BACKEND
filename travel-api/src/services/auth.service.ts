import { User } from '../generated/prisma';
import prisma from '../config/prisma-client';
import bcrypt from 'bcrypt';
import { jwtSign } from '../utils/jwt-sign';
import {
  JWT_SECRET_KEY,
  JWT_VERIFY_EMAIL,
  LINK_VERIFICATION,
} from '../config/main.config';
import { sendMailService } from './mail.service';

export async function registerService({
  fullName,
  email,
  password,
  phoneNumber,
}: Pick<User, 'fullName' | 'email' | 'password' | 'phoneNumber'>) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    },
  });

  const token = jwtSign({ userId: createdUser?.id }, JWT_VERIFY_EMAIL!, {
    expiresIn: '1d',
  });

  await sendMailService({
    to: email,
    subject: 'Email Verification',
    templateName: 'email-verification.html',
    replaceable: {
      emailUser: email,
      linkVerification: `${LINK_VERIFICATION}/${token}`,
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

  if (!findUser?.isVerified)
    throw new Error('User account is not verified. Please verify email first');

  const isComparePassword = await bcrypt.compare(password, findUser?.password);

  if (!isComparePassword) throw new Error('Invalid password account');

  const { password: _, ...safeUser } = findUser;

  const token = jwtSign(
    { userId: findUser?.id, role: findUser?.role },
    JWT_SECRET_KEY!,
    { expiresIn: '1d' },
  );

  return {
    safeUser,
    token,
  };
}

export async function verifyEmailService({ id }: Pick<User, 'id'>) {
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      isVerified: true,
    },
  });
}
