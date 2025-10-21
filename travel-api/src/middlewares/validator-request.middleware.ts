import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validatorRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      success: false, 
      message: errors.array()[0].msg, 
      data: null
    });
    return;
  }
  next();
};
