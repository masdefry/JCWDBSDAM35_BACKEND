import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const jwtVerify = (jwtSecretKey: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization?.split(' ')[1]; // [Bearer, eyxxxx]
    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Token must be provide',
        data: null,
      });
      return;
    }

    const payload = await jwt.verify(token, jwtSecretKey);

    res.locals.payload = payload;

    next();
  };
};

// USER, MANAGER, ADMIN
export const roleVerify = (authorizeUser: string[]) => {
  // ['ADMIN', 'MANAGER']
  return (req: Request, res: Response, next: NextFunction) => {
    const payload = res.locals.payload; // ADMIN
    console.log(payload);
    if (authorizeUser.includes(payload.role)) {
      // Apabila paylaod.role nya ada didalam array authorized user. Kalo ada, maka di izinkan (next)
      next();
      return;
    }

    res.status(401).json({
      success: false,
      message: 'Unauthorized user',
      data: null,
    });
  };
};
