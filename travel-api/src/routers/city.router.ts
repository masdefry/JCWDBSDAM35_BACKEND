import { Router } from 'express';
import { createCityController, getCityController } from '../controllers/city.controller';
import { createCityValidator } from '../validators/create-city.validator';
import { validatorRequest } from '../middlewares/validator-request.middleware';
import { jwtVerify, roleVerify } from '../middlewares/jwt-auth.middleware';
import { JWT_SECRET_KEY } from '../config/main.config';
const router = Router();

// ADMIN & MANAGER
router.post(
  '/',
  jwtVerify(JWT_SECRET_KEY!),
  roleVerify(['ADMIN']),
  createCityValidator,
  validatorRequest,
  createCityController
);

router.get('/', jwtVerify(JWT_SECRET_KEY!), roleVerify(['ADMIN']), getCityController)

export default router;
