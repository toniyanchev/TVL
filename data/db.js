const db = require("../src/db")

let create_query = [
    `DROP Table if EXISTS users`,
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
    `CREATE TABLE users (
        id serial primary key,
        name varchar not null,
        email varchar not null,
        password varchar not null
    )`,
    `INSERT INTO companies (name) VALUES
        ('Mattel'),
        ('Bicycle'),
        ('Hasbro')`,
    `INSERT INTO categories (NAME) VALUES
        ('Family'),
        ('Puzzle'),
        ('Party')`,
    `INSERT INTO games (name, description, price, thumbnail, categoryId, companyId) VALUES
    ('Monopoly', 'a fun game for everyone', 12.99, 'https://www.kroger.com/product/images/xlarge/front/0063050951263', 1, 3),
    ('Uno', 'the uno reverse card is iconic', 5.00, 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-ca/global/search-thumbnail/global_search_thumbnail_image_750x422_mobile_259517.jpg', 3, 1),
    ('Playing cards', 'just a classic, you cannot go wrong', 4.99, 'https://images-na.ssl-images-amazon.com/images/I/81fzQU44EuL._AC_SL1500_.jpg', 1, 2)`,
]

async function main() {
    try {
        await db.connect()
        console.log("connected")
    } catch (e) {
        console.error(e.stack)
        return
    }

    // wait for previous query
    for (const query of create_query) {
        try {
            await db.query(query)
        } catch (e) {
            console.error(e.stack)
        }
    }
}

main()
