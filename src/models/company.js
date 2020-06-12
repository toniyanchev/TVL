const db = require("../db")

module.exports = class Company {
    constructor(name) {
        this.name = name
    }

    save() {
        return db
            .query(`INSERT INTO companies (name) VALUES ($1) RETURNING id`, [
                this.name,
            ])
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static deleteById(id) {
        return db.query(`DELETE * FROM games WHERE company.id = $1`, [id])
    }

    static findById(id) {
        return db.query(`SELECT * FROM games WHERE company.id = $1`, [id])
    }
}
