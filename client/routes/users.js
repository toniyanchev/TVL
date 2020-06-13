const express = require('express')
const router = express.Router()
const User = require('../../src/models/user')

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    User.findById(req.params.id)
    res.render(index)
})

module.exports = router
