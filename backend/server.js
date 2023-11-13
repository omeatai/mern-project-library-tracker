const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5500;

//middlewares
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
