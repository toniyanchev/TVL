const EntitySchema = require("typeorm").EntitySchema;
const Company = require("../models/Company").Company;

module.exports = new EntitySchema({
    name: "Company",
    target: Company,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        }
    }
});
