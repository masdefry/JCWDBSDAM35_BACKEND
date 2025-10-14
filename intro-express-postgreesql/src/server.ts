import express, { Express, Request, Response } from 'express';
import pool from './config/pool.connection';
// Routes
import productsRouter from './routers/products.router';

const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

app.use('/api/products', productsRouter);

pool.connect((err, client, release) => {
  if (err) return console.log(`Error acquiring client ${err.stack}`);

  console.log('Connection successful');

  release();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
