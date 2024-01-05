const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { name, email, password, value, unit } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    console.log(req.body);
    const data =
      await sql`INSERT INTO users(email, name, password, value, unit) VALUES(${email}, ${name}, ${hashedPassword}, ${value}, ${unit}) RETURNING id`;
    const id = data[0].id;
    res.status(201).json({ message: "success", id });
  } catch (error) {
    res.status(500).json({ message: "" });
  }
};

const signin = async (req, res) => {
  try {
    const { logEmail, logPassword } = req.body;
    const logUser =
      await sql`SELECT name, email, password FROM users WHERE email=${logEmail}`;
    if (logUser.length === 0) {
      return res.status(400).json({ message: "Wrong username or password" });
    }
    const isCorrect = bcrypt.compareSync(logPassword, logUser[0].password);
    if (!isCorrect) {
      return res.status(400).json({ message: "Wrong username or password" });
    }
    const { password, ...user } = logUser[0];
    return res.status(201).json({ message: "SUCCESS", user });
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({ message: "Something went wrong", Error: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { logEmail } = req.body;
    console.log(logEmail);
    const userInfo = await sql`SELECT * FROM users WHERE email=${logEmail}`;
    return res.status(201).json({ message: "SUCCESS", userInfo });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", Error: error });
  }
};

const editUser = async (req, res) => {
  try {
    const { unit, value, id } = req.body;
    console.log("EDIT USER REQUEST WORKING", req.body);
    const update =
      await sql`UPDATE users SET unit=${unit}, value=${value} WHERE id=${id} `;
    return res.status(201).json({ message: "SUCCESS" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", Error: error });
  }
};

module.exports = { signup, signin, getUser, editUser };
