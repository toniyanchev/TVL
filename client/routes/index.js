const express = require("express")
let router = express.Router()

let games = [
    {
        id: 1,
        name: "Monopoly",
        description: "a family game",
        thumbnail:
            "https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SX425_.jpg",
        price: 10.0,
    },
    {
        id: 2,
        name: "Second",
        description: "some game",
        thumbnail:
            "https://images-na.ssl-images-amazon.com/images/I/81qy%2BMXuxDL._AC_SX425_.jpg",
        price: 100.0,
    },
]

router.get("/", (req, res, next) => {
    // let category = req.query.catergory
    // let name = req.query.name
    // console.log(games)
    res.render("index", { title: "TVL", games: games })
})

router.get("/posts/:id", (req, res, next) => {
    res.render("item", { title: "TVL", game: games[req.params.id-1] })
})

module.exports = router
