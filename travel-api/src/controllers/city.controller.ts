import { Request, Response } from 'express';
import { createCityService, getCityService } from '../services/city.service';

export async function createCityController(req: Request, res: Response) {
  try {
    const { city, country } = req.body;

    await createCityService({ city, country });

    res.status(201).json({
      success: true,
      message: 'Create city successfull',
      data: {
        city,
        country,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
}

export async function getCityController(_: Request, res: Response){
  const city = await getCityService()

  res.status(200).json({
    success: true, 
    message: 'Get cities successfull', 
    data: city
  })
}