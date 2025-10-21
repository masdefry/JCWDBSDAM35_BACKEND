import { Router } from 'express';
import { createCityController } from '../controllers/city.controller';
import { createCityValidator } from '../validators/create-city.validator';
import { validatorRequest } from '../middlewares/validator-request.middleware';
import { jwtVerify, roleVerify } from '../middlewares/jwt-auth.middleware';
const router = Router();

// ADMIN & MANAGER
router.post(
  '/',
  jwtVerify(process.env.JWT_SECRET_KEY!),
  roleVerify(['ADMIN']),
  createCityValidator,
  validatorRequest,
  createCityController
);

export default router;
