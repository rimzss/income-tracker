const { sql } = require("../config/pgDb");

const createCategory = async (req, res) => {
  try {
    const { catName, catIcon, catColor, catDescription } = req.body;

    await sql`INSERT INTO category(name, description, categoryIcon, categoryColor) VALUES(${catName}, ${catDescription}, ${catIcon}, ${catColor})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body;

    await sql`DELETE FROM category WHERE id=${id}`;
    res.status(201).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { createCategory, deleteCategory };
