import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

export const CORS_WHITELIST_URL_1 = process.env.CORS_WHITELIST_URL_1
export const CORS_WHITELIST_URL_2 = process.env.CORS_WHITELIST_URL_2
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const NODEMAILER_USER=process.env.NODEMAILER_USER
export const NODEMAILER_PASSWORD=process.env.NODEMAILER_PASSWORD
export const LINK_VERIFICATION=process.env.LINK_VERIFICATION
export const JWT_VERIFY_EMAIL=process.env.JWT_VERIFY_EMAIL