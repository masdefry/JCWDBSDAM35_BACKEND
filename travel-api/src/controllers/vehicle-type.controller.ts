import { Request, Response } from 'express';
import { createVehicleTypeService } from '../services/vehicle-type.service';

export async function createVehicleTypeController(req: Request, res: Response) {
  const { name, availableSeat, description } = req.body;
  let files: Express.Multer.File[] = [];

  if (req.files && !Array.isArray(req.files)) {
    const fileGroups = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };
    files = fileGroups['vehicleImages'] || [];
  }

  await createVehicleTypeService({
    name, 
    availableSeat, 
    files,
    description
  })

  res.status(201).json({
    success: true, 
    message: 'Create vehicle type successfull', 
    data: {
      name, 
      availableSeat, 
      description
    }
  })
}
