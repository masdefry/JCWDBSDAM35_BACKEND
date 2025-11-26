import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { corsOptions } from '../config/cors.config';

export const customCors = (req: Request, res: Response, next: NextFunction) => {
  if (
    req?.headers['x-internal-auth'] === process.env.NEXTAUTH_INTERNAL_SECRET // undefined === nextauth2025 -> false
  ) {
    return next();
  } else {
    return cors(corsOptions)(req, res, next);
  }
};
