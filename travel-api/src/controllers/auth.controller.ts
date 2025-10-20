import { Request, Response } from 'express';
import { loginService, registerService } from '../services/auth.service';

export async function registerController(req: Request, res: Response) {
  try {
    const { fullName, email, password, phoneNumber } = req.body;

    await registerService({ fullName, email, password, phoneNumber });

    res.status(201).json({
      success: true,
      message: 'Register user successfull',
      data: {
        fullName,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
}

export async function loginController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const safeUser = await loginService({ email, password });
    res.status(200).json({
      success: true,
      message: 'Login account successfull',
      data: safeUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
}
