const db = require("../db")

const Company = require("./company")
const Game = require("./category")

module.exports = class Category {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    save() {
        return db.execute("INSERT INTO categories (name) VALUES (?)", [
            this.name,
        ])
    }

    static findById(id) {
        return db.execute(`SELECT * FROM games WHERE categoryId = ${id}`)
    }
}
