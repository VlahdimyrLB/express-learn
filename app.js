const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

// OPTION 1: regular
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Unauthorized");
});

//OPTION 2: using JavaScript
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "PLease provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
