const express = require("express");
const path = require("path");
const app = express();

// will make all resources from public available
// setup static and middleware(app.use)
app.use(express.static("./public"));

app.get("/", (req, res) => {
  // we sendFile since we are responding to user request
  // we can also use path.join
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("/about", (req, res) => {
  console.log("User visits the about");
  res.status(200).send("About Page");
});

// all handles all http requests
app.all("*", (req, res) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
