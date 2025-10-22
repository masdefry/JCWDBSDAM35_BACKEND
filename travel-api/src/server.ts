import express, { Express, Request, Response } from 'express';
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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
