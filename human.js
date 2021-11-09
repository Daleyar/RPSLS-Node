const Player = require("./player");

class Human extends Player{
    constructor(name, choice){
        super(name, choice);
    }
    
}

module.exports.Human = Human;