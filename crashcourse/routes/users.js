const express = require('express')
const router = express.Router() // define the router

// express routes goes from top to bottom so order is important static first before dynamic
router.get('/', (req, res) => {
    console.log(req.query.name) // QUERY PARAMS ex. localhost:3000/users/?name=Vlahd will log Vlahd
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render("users/new") // refer to parse middleware and views/users/new.ejs
})

// ADVANCE ROUTING
router.post('/', (req, res) => {
    const isValid = true
    if (isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error ");
        res.render("users/new", { firstName: req.body.firstName })
    }
})

// routes with parameters like id use :id
router.get('/:id', (req, res)=>{
    console.log(req.user);
    const user = req.params.id // access param using this
    res.send(`Get user with id of: ${user}`)
}) 

router.put('/:id', (req, res)=>{
    res.send(`Update user with id of: ${req.params.id}`)
}) 

router.delete('/:id', (req, res)=>{
    res.send(`Delete user with id of: ${req.params.id}`)
})

// We can SIMPLIFY multiply routes with the same path using router.route()
router
    .route('/:id')
    .get((req, res)=>{  
        const user = req.params.id // access param using this
        res.send(`Get user with id of: ${user}`)
    })
    .put((req, res)=>{
        res.send(`Update user with id of: ${req.params.id}`)
    })
    .delete((req, res)=>{
        res.send(`Delete user with id of: ${req.params.id}`)
    })

// param function (middleware) = everytime there a param with id run this code
const users = [{name: "Vlahd"}, {name: "Shar"}]
router.param("id", (req, res, next, id)=>{
    req.user = users[id]
    next()
})


module.exports = router