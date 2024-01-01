const { sql } = require("../config/pgDb");

const createTrans = async (req, res) => {
  try {
    const {
      userId,
      name,
      amount,
      transaction_type,
      description,
      currency_type,
      category_id,
    } = req.body;

    await sql`INSERT INTO transaction(user_id, name, amount, transaction_type, description, currency_type, category_id) VALUES(${userId}, ${name}, ${amount}, ${transaction_type}, ${description}, ${currency_type}, ${category_id})`;
    res.status(201).json({ message: "success" });
    console.log("CREATED NEW TRANSACTION");
  } catch (error) {
    console.log("CREATE CATEGORY FAILED", error);
    res.status(500).json({ error });
  }
};
const getTrans = async (req, res) => {
  try {
    const { userId } = req.body;
    const transactionss =
      await sql`SELECT * FROM category INNER JOIN transaction ON category.id = transaction.category_id WHERE category.user_id=${userId}`;
    res.status(201).json({ message: "success", transactionss });
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};
const getTransLimit = async (req, res) => {
  try {
    const { userId } = req.body;
    const transactionss =
      await sql`SELECT * FROM category INNER JOIN transaction ON category.id = transaction.category_id WHERE category.user_id=${userId} ORDER BY transaction.createdAt desc LIMIT 3`;
    res.status(201).json({ message: "success", transactionss });
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};

const getTransSum = async (req, res) => {
  try {
    const { userId } = req.body;
    const sum =
      await sql`SELECT transaction_type, SUM(amount) FROM transaction WHERE user_id=${userId} GROUP BY transaction_type`;
    res.status(201).json({ message: "success", sum });
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};

const updateCash = async (req, res) => {
  try {
    const { userCash, userId } = req.body;
    console.log("UPDATE CASH WORKING CASH", userCash);
    console.log("UPDATE CASH WORKING ID", userId);
    const updatedValue =
      await sql`UPDATE users SET value= ${userCash} WHERE id=${userId} RETURNING *`;
    res.status(201).json({ message: "success", updatedValue });
  } catch (error) {
    console.log("update CASH FAILED", error);
    res.status(500).json({ error });
  }
};
module.exports = {
  createTrans,
  getTrans,
  getTransSum,
  getTransLimit,
  updateCash,
};
