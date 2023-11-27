const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const { sql } = require("./config/pgDb");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM users`;
    res.status(200).send("Welcome Expense&Income tracker REST API");
    console.log(result);
  } catch (error) {
    res.status(400).send("ERROR OCCURED");
  }
});

app.post("/api/users/signup/", (req, res) => {
  console.log("BODY!", req.body);
  return res.status(200).json({ message: "success post" });
});

app.listen(PORT, () => {
  console.log("SERVER IS STARTED ON", PORT);
});
