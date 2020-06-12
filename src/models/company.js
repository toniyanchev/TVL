const db = require('../db');

const Game = require('./game');
const Category = require('./category');

module.exports = class Company {
	constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    return db.execute(
      'INSERT INTO companies (name) VALUES (?)',
      [this.name]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM companies');
  }

  static findById(id) {
    return db.execute('SELECT * FROM companies WHERE companies.id = ?', [id]);
  }
};