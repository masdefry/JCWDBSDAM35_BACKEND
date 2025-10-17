import { SignOptions, sign } from 'jsonwebtoken';

export const jwtSign = (
  paylaod: any,
  secretKey: string,
  options: SignOptions
) => {
  return sign(paylaod, secretKey, options);
};

// JWT_SECRET_KEY="jcwdbsdam35"
