const express = require("express");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth/users", authRoutes);

app.listen(PORT, () => {
  console.log("SERVER IS STARTED ON", PORT);
});
