const express = require("express");

//invoke the express function
const app = express();

// the callback will invoke everytime the user perform get request on the root '/'
app.get("/", (req, res) => {
  console.log("User visits the homepage");
  res.status(200).send("HOME PAGE");
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

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
