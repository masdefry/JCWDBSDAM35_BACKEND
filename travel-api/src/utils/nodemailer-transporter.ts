import nodemailer from 'nodemailer';
import { NODEMAILER_PASSWORD, NODEMAILER_USER } from '../config/main.config';

export const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});