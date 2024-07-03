const authorize = (req, res, next) => {
  // query string
  // Ex. http://localhost:5000/?user=vlahd
  const { user } = req.query;
  if (user === "vlahd") {
    req.user = { name: "vlahd", id: 1 };
    next();
    // if user doesnt provide username
  } else {
    res.status(401).send("unauthorized"); // 401 - unauthorized
  }
};

module.exports = authorize;
