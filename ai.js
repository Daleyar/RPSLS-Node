const Player = require("./player");

class Ai extends Player{
    constructor(name,choice){
        super(name,choice);
    }

    chooseGesture(){
       let randomNumber = Math.floor(Math.random() * 5);
       return gestureList[randomNumber];
    }

}

module.exports.Ai = Ai;