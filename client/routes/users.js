const express = require('express')
const router = express.Router()
const User = require('../../src/models/user')
const db = require('../../src/db')

router.get('/:id', async (req, res, next) => {
    db.connect()
    let user = await User.findById(req.params.id).rows[0]
    console.log(user)
    res.render(index)
})

module.exports = router
