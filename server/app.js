const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const catRoutes = require("./routes/catRoutes");
const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth/users", authRoutes);
app.use("/api", catRoutes);
app.use("/api/image", imageRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(PORT, () => {
  console.log("SERVER IS STARTED ON", PORT);
});
