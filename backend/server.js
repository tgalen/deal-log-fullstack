const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/dealers", require("./routes/dealerRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
