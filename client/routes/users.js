const express = require('express')
const router = express.Router()
const User = require('../../src/models/user')

router.get('/:id', async (req, res, next) => {
    let user = await User.findById(req.params.id).rows[0]
    console.log(user)
    res.render(index)
})

module.exports = router
