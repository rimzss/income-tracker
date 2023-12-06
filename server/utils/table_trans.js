const { sql } = require("../config/pgDb");

const createTable = async () => {
  console.log("CREATING TABLE..");
  await sql`DROP TABLE IF EXISTS transaction`;
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  await sql`DROP TYPE IF EXISTS transaction_type;`;
  await sql`CREATE TYPE transaction_type AS ENUM('INC', 'EXP');`;
  await sql`CREATE TABLE IF NOT EXISTS transaction(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
       user_id uuid NOT NULL,
       category_id uuid NOT NULL,
        name TEXT NOT NULL,
        amount REAL NOT NULL,
        transaction_type transaction_type,
        currency_type TEXT NOT NULL,
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(category_id) REFERENCES category(id)
    )`;
  console.log("CREATED TABLE.");
};

createTable();
