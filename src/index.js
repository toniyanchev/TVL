<<<<<<< HEAD

console.log("Hi");
=======
const pg = require("pg")

let connection = "postgres://userName:password@localhost/ip:3306/GameShop"

let client = new pg.Client(connection)

client.connect()

exports.getGames = async (category, name) => {
    client
        .query(`SELECT * FROM games WHERE name = '${query}'`)
        .then((res) => {
            return res
        })
        .catch((e) => console.error(e.stack))
}
>>>>>>> 0744b7dcf83dadead474b4268c0678fb73d70d74
