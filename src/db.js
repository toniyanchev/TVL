const { Client } = require('pg');
client = new Client({
    host: 'localhost',
    user: 'toni',
    password: 'toni123',
    database: 'toni',
});

module.exports = client;
