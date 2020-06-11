class Game {
    constructor(id, name, price, company) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.company = company;
    }
}

module.exports = {
    Game: Game
};