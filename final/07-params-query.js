const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  // Selective Response: if I want to return specific info, I can Map the data and grab only the things I need
  const newProduct = products.map(({ id, name, price }) => {
    // ill return/grab only this three properties instead of the whole data
    return { id, name, price };
  });
  res.json(newProduct);
});

// ROUTE PARAMS - :id
// return single/specific product easily
app.get("/api/products/:productId", (req, res) => {
  // console.log(req.params);
  const { productId } = req.params; // this returns a string so we need to use Number() in this case
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  // if the id doesnt exist
  if (!singleProduct) {
    return res.status(404).send("<h4>Product does not exist</h4>");
  }
  return res.json(singleProduct);
});

// complex example
app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params); // { productId: '4', reviewId: 'abc' }
  res.send("hello world");
});

// QUERY STRING - query?
// you can add ampersand for multilple query strings ex. query?name=john&id=1
app.get("/api/v1/query", (req, res) => {
  // search functionality
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  //instead of showing an empty array [ ] we can handle that
  if (sortedProducts.length < 1) {
    // res.status(200).send("no product matched");

    // WE NEED TO EXPLICITYLY RETURN to avoid  Cannot set headers after they are sent to the client
    // We only need one response per request so we need to return to avoid other functionalities to keep on running
    return res.status(200).json({ success: true, data: [] });
  }

  //we can ommit return here because theres no codes after this
  res.status(200).json(sortedProducts);
});

// PORT LISTENER
app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
