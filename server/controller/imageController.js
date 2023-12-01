const { sql } = require("../config/pgDb");

const upload = async (req, res) => {
  console.log("IMAGE", req.file);
  console.log("IMAGE", req.body);
  res.status(201).json({ message: "success" });
};

module.exports = { upload };
