const express = require('express')
const router = express.Router()
const Game = require('../../src/models/game')

router.get('/', (req, res, next) => {
    Game.fetchAll()
        .then((games) => {
            res.render('index', { title: 'TVL', games: games })
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('item', { title: 'TVL', game: game })
        })
        .catch((err) => {
            next(err)
        })
})

router.post('/', (req, res, next) => {
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
    game.save().then((game_res) => {
        res.redirect('/')
    })
})