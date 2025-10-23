import express, { Express, NextFunction, Request, Response } from 'express';
import authRouter from './routers/auth.router';
import cityRouter from './routers/city.router';
import travelRouteRouter from './routers/travel-route.router';
import vehicleTypeRouter from './routers/vehicle-type.router';

const app: Express = express();
app.use(express.json());
const port = 5001;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

app.use('/api/auth', authRouter);
app.use('/api/city', cityRouter);
app.use('/api/travel-route', travelRouteRouter);
app.use('/api/vehicle-type', vehicleTypeRouter);

// Centralized Error (Middleware untuk handling error (application level))
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false, 
    message: error?.message, 
    data: null
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
