const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res
// use() - apply to more/all
// route - apply to specific route only

// middleware options = our own middleware / express / third party

// if multiple middlewares, place them in array
// app.use(express.static('./public')) - sample express middleware
// app.use([authorize, logger]); - sample own middleware
app.use(morgan("tiny")); // - sample third party middleware

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// we can also invoke the multiple middleware only on specified route [authorize, logger]
app.get("/items", [authorize, logger], (req, res) => {
  // accessed the re.user because of the middleware authorize
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
