import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: process.env.DATABASE_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "UserTable",
});

export default pool;
