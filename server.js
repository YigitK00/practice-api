const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const todoRouter = require("./routes/todos");
app.use("/todos", todoRouter);

//const url = process.env.ATLAS_URI;
const url =
  "mongodb+srv://yigitklc123:12345@cluster1.h2xbl8k.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
