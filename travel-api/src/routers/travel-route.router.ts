import { Router } from 'express';
import { createTravelRouteController } from '../controllers/travel-route.controller';
import { createTravelRouteValidator } from '../validators/create-travel-route.validator';
import { validatorRequest } from '../middlewares/validator-request.middleware';
import { jwtVerify, roleVerify } from '../middlewares/jwt-auth.middleware';
const router = Router();

router.post(
  '/',
  jwtVerify(process.env.JWT_SECRET_KEY!),
  roleVerify(['ADMIN']),
  createTravelRouteValidator,
  validatorRequest,
  createTravelRouteController
);

export default router;
