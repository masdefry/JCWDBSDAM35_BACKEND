import express, { Express, Request, Response } from 'express';
import fs from 'fs'; // file-system: Untuk membaca/read data suatu file

const app: Express = express();
app.use(express.json());
const port = 5000;

app.get('/', (_: Request, res: Response) => {
  res.send('<h1>Welcome to API Server</h1>');
});

app.get('/api/products', (req: Request, res: Response) => {
  let productsData: any = fs.readFileSync('src/db/products.json'); // Masih dalam bentuk buffer
  productsData = JSON.parse(productsData);

  res.json({
    success: true,
    message: 'Get products successfull',
    data: productsData?.products,
  });
});

app.post('/api/products', (req: Request, res: Response) => {
  function randomHex4() {
    const arr = new Uint8Array(2);
    crypto.getRandomValues(arr);
    return Array.from(arr)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  const { name, price, stock, unit } = req.body; // Digunakan untuk mengambil req data yg dikirim via body

  // Step-02: Dapatkan current data nya terlebih dahulu
  let productsData: any = fs.readFileSync('src/db/products.json');
  productsData = JSON.parse(productsData);

  //  Step-03: Modify current datanya (tambahkan data baru ke current data)
  productsData?.products?.push({ id: randomHex4(), name, price, stock, unit });

  // Step-04: Write file current data yg sudah di modify
  fs.writeFileSync('src/db/products.json', JSON.stringify(productsData));

  res.json({
    success: true,
    message: 'Create product successfull',
    data: { name, price, stock, unit },
  });
});

// :id : req.url (req.params)
app.put('/api/products/:productId', (req: Request, res: Response) => {
  // Step-00  : Mengambil request data dari client (id didapatkan dari params url, {name, price, stock, unit} didapatkan dari body)
  const id = req?.params?.productId;
  const { name, price, stock, unit } = req.body;

  // Step-01  : Mengambil data dari json (readFile)
  // Step-02  : Mengupdate datanya (.push)
  // Step-03  : Menyimpan data baru (writeFile)
  // Step-04  : Kirim response (res.json)
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Metode pengiriman dari client -> server
// 1. Body
// 2. Url: - params & -query
// 3. Headers
