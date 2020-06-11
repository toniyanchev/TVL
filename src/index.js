const pg = require("pg")

let connection = "postgres://userName:password@localhost/ip:3306/GameShop"

let pgClient = new pg.Client(connection)

pgClient.connect()

let query = pgClient.query(`SELECT id from Customer where name = '${somename}'`)

query.on("row", function (row, result) {
    result.addRow(row)
})
