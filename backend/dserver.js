const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(`<h1>Hello from Node App. Version: ${process.versions.node}</h1>`);
});

app.listen(process.env.PORT || 3000);
