const db = require("../src/db")

let creators = [
    `DROP Table if EXISTS Games;`,
    `DROP TABLE IF EXISTS Companies;`,
    `DROP TABLE IF EXISTS Categories;`,
    `create table Companies (
        id serial primary key,
        name varchar not null
    );`,
    `create table Categories (
        id serial primary key,
        name varchar not null
    );`,
    `create table Games (
        id serial primary key,
        name varchar not null,
        description varchar not null,
        price float not null,
        thumbnail varchar not null,
        categoryId int references Categories(id) not null,
        companyId int references Companies(id)
    );`,
    `INSERT INTO Companies (name) VALUES
        ('SuperEvilMegacorp'),
        ('Riot Games'),
        ('Valve');`,
    `INSERT INTO Categories (NAME) VALUES
        ('MOBA'),
        ('FPS'),
        ('RPG');`,
    `INSERT INTO Games (NAME, description, price, thumbnail, categoryId, companyId) VALUES
        ('League Of Legends', 'Top notch game', 0, 'http://some/where.img', 1, 2),
        ('Rainbow Six Siege', 'Topper notcher game', 25.99, 'http://some/where/else.img', 2, 3),
        ('Vain Glory', 'Very shitty game', 5.99, 'http://who/knows/where.img', 3, 1);`,
]

for (creator in creators) {
    db.query(creator, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

db.query(
    `SELECT
        games.name as title,
        description,
        price,
        categories.name as category,
        companies.name as company
        FROM Games
        JOIN Categories ON Games.categoryId = Categories.id
        JOIN Companies ON Games.companyId = Companies.id;`
)
