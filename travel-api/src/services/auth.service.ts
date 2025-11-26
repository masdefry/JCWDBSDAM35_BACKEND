import { User } from '../generated/prisma';
import prisma from '../config/prisma-client';
import bcrypt from 'bcrypt';
import { jwtSign } from '../utils/jwt-sign';
import {
  JWT_SECRET_KEY,
  JWT_VERIFY_EMAIL,
  LINK_VERIFICATION,
} from '../config/main.config';
import { emailTransporter } from '../utils/nodemailer-transporter';
import fs from 'fs/promises';
import path from 'path';
import Handlebars from 'handlebars';

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

  const templateDir = path.resolve(__dirname, '../templates');

  const templatePath = path.join(templateDir, `email-verification.html`);

  const templateSource = await fs.readFile(templatePath, 'utf8');

  const templateCompiled = await Handlebars.compile(templateSource);

  const token = jwtSign({ userId: createdUser?.id }, JWT_VERIFY_EMAIL!, {
    expiresIn: '1d',
  });
  /*
    emailUser untuk menggantikan {{emailUser}}
    linkVerification untuk menggantikan {{linkVerification}}
  */
  const templateHtml = templateCompiled({
    emailUser: email,
    linkVerification: `${LINK_VERIFICATION}/${token}`,
  });

  await emailTransporter.sendMail({
    subject: 'Test-01',
    to: email,
    html: templateHtml,
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
    { expiresIn: '1d' }
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
