const express = require("express");
const app = express();

// req => middleware => res

// we used in req, res and next as parameter
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); // GET / 2024

  // EITHER we send back our own response OR passed it on next() middleware
  // res.end("Testing");
  next();
};

// reference the logger function
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
