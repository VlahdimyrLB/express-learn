const express = require("express");
const app = express();

const { products } = require("./data.js");

app.get("/", (req, res) => {
  // to send JSON response or API
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
