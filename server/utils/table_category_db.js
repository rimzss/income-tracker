const { sql } = require("../config/pgDb");

const createTable = async () => {
  await sql`DROP TABLE IF EXISTS category`;
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`CREATE TABLE IF NOT EXISTS category(
        id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id uuid NOT NULL,
        name VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        categoryIcon TEXT,
        categoryColor TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )`;
};
console.log("CREATING CATEGORY TABLE..");
createTable();
console.log("CREATED CATEGORY TABLE.");
