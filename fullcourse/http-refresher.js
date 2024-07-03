// REFRESH the usage of http
// setting up a server using just HTTP Module is possible but can be difficult for app with large resources
// like in the example we set up a response even for the smallest info like image and styles

const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");

// we need to handle all of files as a response in order for the web to work fully
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  //Home page
  if (url === "/") {
    // send this back to the user
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    //we always need response.end(), this must be called on each response
    res.end();
  }

  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }

  // image
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }

  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }

  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About me</h1>");
    res.end();
  }
  // 404 not found
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
