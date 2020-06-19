const express = require('express')
const router = express.Router()
const User = require('../../src/models/user')

router.get('/:id', async (req, res, next) => {
    let user = await User.findById(req.params.id)
    res.render(user, { user: user.rows[0] })
})


module.exports = router
