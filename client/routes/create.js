const express = require('express')
const router = express.Router()

router.get('/game', (req, res, next) => {
    let inputs = [
        {
            type: 'text',
            name: 'name',
        },
        {
            type: 'text',
            name: 'description',
        },
        {
            type: 'number',
            name: 'price',
        },
        {
            type: 'text',
            name: 'thumbnail',
        },
        {
            type: 'number',
            name: 'categoryId',
        },
        {
            type: 'number',
            name: 'companyId',
        },
    ]

    res.render('create', { title: 'Game', inputs: inputs })
})

router.get('/category', (req, res, next) => {
    let inputs = [
        {
            type: 'text',
            name: 'name',
        },
    ]

    res.render('create', { title: 'Category', inputs: inputs })
})

module.exports = router
