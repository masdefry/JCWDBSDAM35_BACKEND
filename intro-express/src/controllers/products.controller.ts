/*
    CONTROLLER:
    Tugas utamanya untuk meng-handle request dan response 
*/
import { Request, Response } from 'express';
import fs from 'fs';
import { readFileHelper } from '../utils/read-file-helper';

export function getProductsController(_: Request, res: Response) {
  let productsData: any = fs.readFileSync('src/db/products.json');
  productsData = JSON.parse(productsData);

  res.json({
    success: true,
    message: 'Get products successfull',
    data: productsData?.products,
  });
}

export function postProductController(req: Request, res: Response) {
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
}

export function updateProductController(req: Request, res: Response) {
  const id = req?.params?.productId;
  const { name, price, stock, unit } = req.body;

  let productsData: any = readFileHelper('src/db/products.json');

  const findIndex = productsData?.products?.findIndex(
    (product: any) => product?.id === id
  );

  productsData.products[findIndex] = { id, name, price, stock, unit };

  fs.writeFileSync('src/db/products.json', JSON.stringify(productsData));

  res.json({
    success: true,
    message: `Update product with id ${id} successfull`,
    data: {
      name,
      price,
      stock,
      unit,
    },
  });
}

const arr = [
  {
    id: 1,
    name: 'BCA',
  },
  {
    id: 2,
    name: 'BNI',
  },
];

arr[1] = { id: 2, name: 'BSI' };
