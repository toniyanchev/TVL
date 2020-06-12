const db = require("../src/db")

let creators = [
    `DROP Table if EXISTS games`,
    `DROP TABLE IF EXISTS companies`,
    `DROP TABLE IF EXISTS categories`,
    `CREATE TABLE companies (
        id serial primary key,
        name varchar not null
    )`,
    `CREATE TABLE categories (
        id serial primary key,
        name varchar not null
    )`,
    `CREATE TABLE games (
        id serial primary key,
        name varchar not null,
        description varchar not null,
        price float not null,
        thumbnail varchar not null,
        categoryId int references categories(id) not null,
        companyId int references companies(id)
    )`,
    `INSERT INTO companies (name) VALUES
        ('SuperEvilMegacorp'),
        ('Riot games'),
        ('Valve')`,
    `INSERT INTO categories (NAME) VALUES
        ('MOBA'),
        ('FPS'),
        ('RPG')`,
    `INSERT INTO games (NAME, description, price, thumbnail, categoryId, companyId) VALUES
        ('League Of Legends', 'Top notch game', 0, 'http://some/where.img', 1, 2),
        ('Rainbow Six Siege', 'Topper notcher game', 25.99, 'http://some/where/else.img', 2, 3),
        ('Vain Glory', 'Very shitty game', 5.99, 'http://who/knows/where.img', 3, 1)`,
]

async function main() {
    try {
        await db.connect()
        console.log("connected")
    } catch (e) {
        console.error(e.stack)
    }

    for (const creator of creators) {
        try {
            let res = await db.query(creator)
        } catch (e) {
            console.error(e.stack)
        }
    }
    second()
}

function second() {
    db.query(
        `SELECT
            games.name as title,
            description,
            price,
            categories.name as category,
            companies.name as company
            FROM games
            JOIN categories ON games.categoryId = categories.id
            JOIN companies ON games.companyId = companies.id`
    )
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.error(err.stack))
        .then(() => db.end())
}

main()
