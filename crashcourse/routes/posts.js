const express = require('express')
const router = express.Router() 

// ADVANCE ROUTING
router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('New User')
})

module.exports = router