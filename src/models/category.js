const db = require('../db')

module.exports = class Category {
    constructor(name) {
        this.name = name
    }

    save() {
        return db
            .query(`INSERT INTO categories (name) VALUES ($1) RETURNING id`, [
                this.name,
            ])
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static findById(id) {
        return db.query(`SELECT * FROM games WHERE categoryId = $1`, [id])
    }
}
