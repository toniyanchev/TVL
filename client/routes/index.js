const express = require('express')
const router = express.Router()
const User = require('../../src/models/user')

router.get('/', (req, res, next) => {
    res.redirect('/games')
})

router.get('/login', (req, res, next) => {
    res.render('authenticate', {
        title: 'login',
        span: "Don't have an account?",
        error: null,
    })
})

router.post('/login', (req, res, next) => {
    let user = User.findByMail(req.body.email).rows
    if (user === undefined) {
        res.render('authenticate', {
            title: 'login',
            span: "Don't have an account?",
            error: 'Incorrect email or password',
        })
    } else {
        res.redirect('/games')
    }
})

router.get('/register', (req, res, next) => {
    res.render('authenticate', {
        title: 'register',
        span: 'Already have an account?',
        error: null,
    })
})

router.post('/register', (req, res, next) => {
    let user = User.findByMail(req.body.email).rows
    if (user) {
        res.render('authenticate', {
            title: 'register',
            span: 'Already have an account?',
            error: 'This email is already registered',
        })
    } else {
        res.redirect('/games')
    }
})

router.post('/register', (req, res, next) => {})

module.exports = router
