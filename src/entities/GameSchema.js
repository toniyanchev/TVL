const EntitySchema = require("typeorm").EntitySchema;
const Game = require("../models/Game").Game;
const Company = require("../models/Company").Company;

module.exports = new EntitySchema({
    name: "Game",
    target: Game,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        price: {
            type: "int"
        },
        name: {
            type: "varchar"
        }
    },
    relations: {
        company: {
            target: "Company",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        }
    }
});
