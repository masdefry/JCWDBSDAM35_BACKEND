import express, { Express, NextFunction, Request, Response } from 'express';
import authRouter from './routers/auth.router';
import cityRouter from './routers/city.router';
import travelRouteRouter from './routers/travel-route.router';
import vehicleTypeRouter from './routers/vehicle-type.router';
import cors from 'cors';

const app: Express = express();

var whitelist = [
  process.env.CORS_WHITELIST_URL_1,
  process.env.CORS_WHITELIST_URL_2,
  
];
var corsOptions = {
  origin: function (origin: any, callback: any) {
    // ⚠️ FOR DEVELOPMENT PHASE ONLY!
    if (!origin) {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// app.use(cors()); // Default config, artinya API akan memberikan izin sharing resource dari client manapun
app.use(cors(corsOptions));
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
    data: null,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
