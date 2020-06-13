const express = require('express')
const router = express.Router()
const Game = require('../../src/models/game')
const db = require('../../src/db')

router.get('/', (req, res, next) => {
    try {
        db.connect()
    } catch (e) {
        console.error(e.stack)
    }
    Game.fetchAll()
        .then((games) => {
            res.render('index', { title: 'TVL', games: games.rows })
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    try {
        db.connect()
    } catch (e) {
        console.error(e.stack)
    }

    Game.findById(parseInt(req.params.id))
        .then((game) => {
            res.render('item', { title: 'TVL', game: game.rows[0] })
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

module.exports = router
