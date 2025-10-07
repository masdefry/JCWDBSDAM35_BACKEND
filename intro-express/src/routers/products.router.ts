import { Router } from 'express';
import {
  getProductsController,
  postProductController,
  updateProductController,
} from '../controllers/products.controller';

const router = Router();

router.get('/', getProductsController);
router.post('/', postProductController);
router.put('/:productId', updateProductController);

export default router;
