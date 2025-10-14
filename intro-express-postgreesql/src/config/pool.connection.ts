import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'jcwdam35_ecommerce',
  password: 'abc12345',
});

export default pool;