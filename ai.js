"use strict";
const Player = require("./player");

class Ai extends Player{
    constructor(name,choice){
        super(name,choice);
    }

    chooseGesture(){
        //Randomly Selects a Gesture from gestureList:
       let selectedGesture = gestureList[Math.floor(Math.random() * 5)];

       console.log(`${this.name} has selected ${selectedGesture}!`);

       return gestureList[randomNumber];
    }

}

module.exports = Ai;