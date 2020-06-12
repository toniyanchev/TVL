const db = require('../db');

const Company = require('./company');
const Category = require('./category');

module.exports = class Game {
	constructor(id, name, description, price, companyId, categoryId) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.companyId = companyId;
    this.categoryId = categoryId;
  }

  save() {
    return db.execute(
      'INSERT INTO games (name, description, price, companyId, categoryId) VALUES (?, ?, ?, ?, ?)',
      [this.name, this.description, this.price, this.companyId, this.categoryId]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM games');
  }

  static findById(id) {
    return db.execute('SELECT * FROM games WHERE games.id = ?', [id]);
  }
};