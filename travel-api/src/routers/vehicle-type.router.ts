import { Router } from 'express';
import { createVehicleTypeController } from '../controllers/vehicle-type.controller';
import { uploaderMulter } from '../utils/multer-upload';
import { createVehicleValidator } from '../validators/create-vehicle.validator';
import { validatorRequest } from '../middlewares/validator-request.middleware';
import { jwtVerify, roleVerify } from '../middlewares/jwt-auth.middleware';
const router = Router();

router.post('/', 
jwtVerify(process.env.JWT_SECRET_KEY!), 
roleVerify(['ADMIN']),
uploaderMulter(['jpg', 'jpeg', 'webp', 'png']).fields([{name: 'vehicleImages', maxCount: 3}]), 
createVehicleValidator, 
validatorRequest, 
createVehicleTypeController);

export default router;
