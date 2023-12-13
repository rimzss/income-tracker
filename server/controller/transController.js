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
    const transactions =
      await sql`SELECT * FROM transaction WHERE user_id=${userId}`;
    res.status(201).json({ message: "success", transactions });
    console.log("GET TRANS SUCCESS");
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};

const getTransTotalIncome = async (req, res) => {
  try {
    const { userId } = req.body;
    const trans =
      await sql`SELECT * FROM transaction WHERE user_id=${userId} transaction_type='INC'`;
    res.status(201).json({ message: "success", trans });
    console.log("GET TRANS SUCCESS");
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};

module.exports = { createTrans, getTrans };
