const express = require("express") // assign and require express
const app = new express() // call express to create an application

/* we use EJS as view/template engine
   setup view engine for views */
app.set('view engine', 'ejs')

// Middlewares = functions that run in starting and end of request
function logger (req, res, next){
    console.log(req.originalUrl);
    next()
}
app.use(logger) // define at top so it will work on all routes or example below for specific use

// STATIC middleware - to serve static files in public directory
app.use(express.static("public"))

// PARSE FROM - parse form data 
app.use(express.urlencoded({extended: true})) // access information/body from FORMS

// PARSE JSON - parse JOSN DATA
app.use(express.json()) // parse json from req.body




// BASIC ROUTING using http methods app.get (get, post, put, patch, delete)
// params = (path, middlewares, function(req, res, next))
app.get('/', logger, (req, res) => {
    console.log("Hi");

    // send()- back information/response to the user
    // res.send("Hi")
    // res.status(500).send('Internal Server Error')  /* send status codes with messages */
    // res.json({message: "Success"})  /* or commonly send JSON instead of string, this is used for API */
    // res.status(500).json({message: "Error"}) 
    // res.download('app.js') /* user download the specified path */

    /*  render an HTML
        TELL where all the view files are, it is commonly in views folder
        params (path, data) */
    res.render('index', {text: "world"}) 
})

// ROUTING
const userRouter = require('./routes/users') // define the route path
app.use('/users', userRouter) // link route to particular path || anything that starts with user add userRouter


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); // Our server will listen to this port, we can now use localhost:3000