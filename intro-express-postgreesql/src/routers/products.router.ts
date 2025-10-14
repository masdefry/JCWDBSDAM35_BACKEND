import { Router } from 'express';
import { createProductController } from '../controllers/products.controller';
const router = Router();

router.post('/', createProductController);

export default router;