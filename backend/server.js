const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/dealers", require("./routes/dealerRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
