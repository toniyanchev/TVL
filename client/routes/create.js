const express = require('express')
const router = express.Router()
const Game = require('../../src/models/game')
const Category = require('../../src/models/category')
const Company = require('../../src/models/company')

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

router.post('/game', (req, res, next) => {
    const {
        name,
        description,
        price,
        thumbnail,
        categoryId,
        companyId,
    } = req.body

    const game = new Game(
        name,
        description,
        price,
        thumbnail,
        categoryId,
        companyId
    )
    console.log(game)
    game.save().then(() => {
        res.redirect('/')
    })
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

router.post('/category', (req, res, next) => {
    const name = req.body
    const category = new Category(name)

    console.log(category)
    category.save().then(() => {
        res.redirect('/')
    })
})

router.get('/company', (req, res, next) => {
    let inputs = [
        {
            type: 'text',
            name: 'name',
        },
    ]

    res.render('create', { title: 'Company', inputs: inputs })
})
router.post('/company', (req, res, next) => {
    const name = req.body
    const company = new Company(name)

    console.log(company)
    company.save().then(() => {
        res.redirect('/')
    })
})

module.exports = router
