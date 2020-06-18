const db = require('../db')

module.exports = class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        return db
            .query(
                `INSERT INTO users (name, email, password)
                VALUES ($1, $2, $3)
                RETURNING id
                `,
                [this.name, this.email, this.password]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static deleteById(id) {
        return db.query(`DELETE FROM users WHERE users.id = $1`, [id])
    }

    static fetchAll() {
        return db.query('SELECT * FROM users')
    }

    static findById(id) {
        return db.query(`SELECT * FROM users WHERE users.id = $1`, [id])
    }
}
