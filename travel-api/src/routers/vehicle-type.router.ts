import { Router } from 'express';
import { createVehicleTypeController } from '../controllers/vehicle-type.controller';
import { uploaderMulter } from '../utils/multer-upload';
const router = Router();

router.post('/', uploaderMulter(['image']).fields([{name: 'vehicleImages', maxCount: 3}]), createVehicleTypeController);

export default router;
