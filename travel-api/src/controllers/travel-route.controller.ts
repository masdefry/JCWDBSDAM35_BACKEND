import { Request, Response } from 'express';
import { createTravelRouteService } from '../services/travel-route.service';

export async function createTravelRouteController(req: Request, res: Response) {
  try {
    const { distanceKilometers, durationMinutes, originId, destinationId } =
      req.body;
    await createTravelRouteService({
      distanceKilometers,
      durationMinutes,
      originId,
      destinationId,
    });

    res.status(201).json({
      success: true,
      message: 'Create travel route successfull',
      data: { distanceKilometers, durationMinutes, originId, destinationId },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
}
