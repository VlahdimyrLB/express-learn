const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Unauthorized");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

module.exports = router;
