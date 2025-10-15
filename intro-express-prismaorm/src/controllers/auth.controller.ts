/*
  CONTROLLER:
  1. Melakukan request
  2. Melakukan response
*/
import { Request, Response } from 'express';
import { registerUserService } from '../services/auth.service';

export async function registerUserController(req: Request, res: Response) {
  try {
    // Step-01  : Get request data from client
    const { username, email, password } = req.body;

    await registerUserService({
      username, 
      email, 
      password
    })

    // Step-03  : Sending response
    res.status(201).json({
      success: true,
      message: 'Register user successfull',
      data: { username, email },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false, 
      message: error?.message, 
      data: null
    })
  }
}