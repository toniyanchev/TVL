const { Client } = require("pg")
const { config } = require("./config")
/*
 * The config file contains:
 * host, port, user, password
 */

client = new Client(config)

module.exports = client
