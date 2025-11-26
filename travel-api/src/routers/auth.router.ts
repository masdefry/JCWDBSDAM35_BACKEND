import { Router } from 'express';
import {
  registerController,
  loginController,
  verifyEmailController,
} from '../controllers/auth.controller';
import { jwtVerify } from '../middlewares/jwt-auth.middleware';
import { JWT_VERIFY_EMAIL } from '../config/main.config';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get(
  '/verify-email',
  jwtVerify(JWT_VERIFY_EMAIL!),
  verifyEmailController
);

export default router;
