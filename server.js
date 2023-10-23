const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//endpoints
app.use("/api/v1/todos", require("./routes/toDoRoute"));

app.listen(port, () =>
  console.log(`The Server is Running on the Port ${port}`)
);
