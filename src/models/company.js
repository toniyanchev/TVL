const db = require("../db")

const Game = require("./game")
const Category = require("./category")

module.exports = class Company {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    save() {
        return db.execute("INSERT INTO companies (name) VALUES (?)", [
            this.name,
        ])
    }

    static deleteById(id) {}

    static findById(id) {
        return db.execute(`SELECT * FROM games WHERE company.id = ${id}`)
    }
}
