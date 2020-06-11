const {createConnection, Connection} = require("typeorm");

const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "tvl",
    password: "Toni_123",
    database: "tvl"
});

console.log("Hi");