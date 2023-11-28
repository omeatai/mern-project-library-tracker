require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

// middlewares
// const corsOption = {
//   origin: ["http://localhost:3000", "https://ltracker.ifeanyiomeata.com/"],
// };
// app.use(cors(corsOption));

app.use(cors());
app.use(express.json());

app.use("/books", booksRouter);
app.use("/users", usersRouter);

app.get("/", function (req, res) {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(`<h1>Hello from Node App.</h1>`);
  //   res.send(`<h1>Hello from Node App. Version: ${process.versions.node}</h1>`);
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
