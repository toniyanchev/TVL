const db = require('../db')

module.exports = class Game {
    constructor(name, description, price, thumbnail, companyId, categoryId) {
        this.name = name
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.companyId = companyId
        this.categoryId = categoryId
    }

    save() {
        return db
            .query(
                `INSERT INTO games (name, description, price, thumbnail, )
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING id
                `,
                [
                    this.name,
                    this.description,
                    this.price,
                    this.thumbnail,
                    this.companyId,
                    this.categoryId,
                ]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static deleteById(id) {
        return db.query(`DELETE FROM games WHERE id = $1`, [id])
    }

    static fetchAll() {
        return db.query('SELECT * FROM games')
    }

    static findById(id) {
        return db.query(`SELECT * FROM games WHERE id = $1`, [id])
    }

    static findByCategory(category) {
        return db.query(
            `SELECT * FROM games JOIN categories on categoryID = categories.id WHERE category.name = $1`,
            [category]
        )
    }
}
