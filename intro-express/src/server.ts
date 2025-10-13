import express, { Express, Request, Response } from 'express';
import productsRouter from './routers/products.router';

const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

/* app.use -> Middleware (Application Level) */
app.use('/api/products', productsRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Metode pengiriman dari client -> server
// 1. Body
// 2. Url: - params & -query
// 3. Headers
