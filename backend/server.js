const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500;

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

//middlewares
app.use(cors());
app.use(express.json());

app.use("/books", booksRouter);
app.use("/users", usersRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
