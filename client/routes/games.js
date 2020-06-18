const express = require('express')
const router = express.Router()
const Game = require('../../src/models/game')

router.get('/', (req, res, next) => {
    Game.fetchAll()
        .then((games) => {
            res.render('index', { title: 'TVL', games: games.rows })
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/:id', (req, res, next) => {
    Game.findById(req.params.id)
        .then((game) => {
            res.render('item', { title: 'TVL', game: game.rows[0] })
        })
        .catch((err) => {
            next(err)
        })
})

router.post('/delete/:id', (req, res, next) => {
    Game.deleteById(req.params.id).then(res.redirect('/games'))
})

module.exports = router
