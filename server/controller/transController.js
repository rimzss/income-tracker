const { data } = require("autoprefixer");
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
    const { userId } = req.params;
    const sum =
      await sql`SELECT transaction_type, SUM(amount) FROM transaction WHERE user_id=${userId} GROUP BY transaction_type`;
    // const { exp } = data[0];
    const exp = sum.filter((el) => el.transaction_type === "EXP")[0].sum;
    const inc = sum.filter((el) => el.transaction_type === "INC")[0].sum;
    // const rr = sum.reduce((prev, el) => prev + el.sum, 0);

    res.status(201).json({ message: "success", data: { exp, inc } });
  } catch (error) {
    console.log("GET TRANS FAILED", error);
    res.status(500).json({ error });
  }
};

const updateCash = async (req, res) => {
  try {
    const { userId, value } = req.body;
    console.log("UPDATE CASH WORKING", userId);
    const updatedValue =
      await sql`UPDATE users SET value ${value} WHERE id=${userId}`;
    res.status(201).json({ message: "success", updatedValue });
  } catch (error) {
    console.log("update CASH FAILED", error);
    res.status(500).json({ error });
  }
};

const monthSum = async (req, res) => {
  try {
    const { userId } = req.params;
    const sum =
      await sql`SELECT transaction_type, EXTRACT(year FROM updatedat) as jil, EXTRACT(month FROM updatedat) as sar, SUM(amount) FROM transaction WHERE user_id=${userId} GROUP BY jil, sar, transaction_type`;
    const exp = sum.filter((el) => el.transaction_type === "EXP")[0];
    const inc = sum.filter((el) => el.transaction_type === "INC")[0];

    res.status(201).json({ message: "success", data: { exp, inc } });
  } catch (error) {
    console.log(error);
  }
};

const catSum = async (req, res) => {
  try {
    const { userId } = req.params;
    const sum =
      await sql`SELECT ct.name ,SUM(amount) FROM transaction as tr INNER JOIN category as ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} GROUP BY tr.category_id, ct.name`;

    res.status(201).json({ message: "success", sum });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createTrans,
  getTrans,
  getTransSum,
  getTransLimit,
  updateCash,
  monthSum,
  catSum,
};
