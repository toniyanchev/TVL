const mysql = require("mysql")

let con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
})

con.connect()

con.query("SELECT * FROM games", function (err, rows, fields) {
    if (err) throw err

    console.log("The solution is: ", rows[0].solution)
})

module.export = function getUser(id) {
    return con.query(`SELECT * FROM users WHERE id=${id}`)
}

module.export = function getGames(qry) {
    if (qry == undefined) {
        return con.query(`SELECT * FROM games`)
    }
    con.query(`SELECT * FROM games WHERE name=${qry}`)
}
