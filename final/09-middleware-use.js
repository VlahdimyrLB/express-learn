const express = require("express");
const app = express();

// req => middleware => res
const logger = require("./logger");

// we pass the middleware in use() this method will invoke the logger in any route
app.use(logger);
// we can add another argument to it - which will apply the logger only on the route specified
// syntax: user(path, callback)
// Ex. this will only apply logger to all routes that comes after /api
// app.use("/api", logger);

// we dont have to type logger here already app.get("/", logger, (req, res)
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/products", (req, res) => {
  res.send("Products");
});

app.get("/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
