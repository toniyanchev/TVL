const express = require('express')
let router = express.Router()

router.get('/login', (req, res, next) => {
    res.render('authenticate', {
        title: 'login',
        span: "Don't have an account?",
    })
})

router.get('/register', (req, res, next) => {
    res.render('authenticate', {
        title: 'register',
        span: 'Already have an account?',
    })
})

module.exports = router
