import express, { Express, Request, Response } from 'express';
import authRouter from './routers/auth.router';
import cityRouter from './routers/city.router';

const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

app.use('/api/auth', authRouter);
app.use('/api/city', cityRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
