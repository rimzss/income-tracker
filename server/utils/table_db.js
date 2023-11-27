const { sql } = require("../config/pgDb");

const createTable = async () => {
  await sql`DROP TABLE IF EXISTS users`;
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`CREATE TABLE IF NOT EXISTS users(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(50) NOT NULL UNIQUE,
        name VARCHAR(50) NOT NULL,
        password TEXT NOT NULL,
        avatar_img TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
};
console.log("CREATING TABLE..");
createTable();
console.log("CREATED TABLE.");
