import { Router } from 'express';
import { registerUserController } from '../controllers/auth.controller';
const router = Router();

router.post('/', registerUserController);

export default router;