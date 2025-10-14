import { Request, Response } from 'express';
import pool from '../config/pool.connection';

export async function createProductController(req: Request, res: Response) {
  try {
    // Step-01  : Get request data from client
    const { name, description, price, stock } = req.body;

    // Step-02  : Execute insert query (save data to db)
    const query =
      'INSERT INTO products(name, description, price, stock) VALUES($1, $2, $3, $4)';

    await pool.query(query, [name, description, price, stock]);

    res.json({
      success: true,
      message: 'Create product successfull',
      data: {
        name,
        description,
        price,
        stock,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
