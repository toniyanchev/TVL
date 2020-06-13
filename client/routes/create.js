const express = require('express')
const router = express.Router()

router.get('/game', (req, res, next) => {
    res.render('create')
})

router.get('/category')
