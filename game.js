"use strict";
const prompt = require("prompt-sync")();
const Human = require("./human");
const Ai = require("./ai");

class Game {
    constructor(){
        this.player01 = new Human();
        this.player02;
    }
    
    runGame(){
        welcome()
        displayRules()
        createRound()
        decideWinner()
    }

    welcome(){
        console.log("Welcome to Rock Paper Scissors Lizard Spock!");
    }

    displayRules(){
        console.log("RULES:");
        console.log("Rule#1: Game is set to best of three\nRule#2: There are no points for ties");
        console.log("HOW TO WIN:");
        console.log("Scissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors");
        console.log("Scissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock\nRock crushes Scissors");
    }

    createRound(){
        while (player01.score < 2 && this.player02.score < 2) {
            this.player01.chooseGesture();
            this.player02.chooseGesture();
            compareGestures();
        }
        decideWinner();
    }

    decideWinner(){
        if (this.player01.score == 2){
            console.log(`${this.player01.name} wins the game!`);
        }else{
            console.log(`${this.player02.name} wins the game!`);
        }
        playAgain();
    }

    playAgain(){
        userInput = prompt("Play Again? y/n ");
        switch(userInput){
            case "y":
                runGame();
                break;
            case "n":
                console.log("Goodbye");
                break;
            default:
                console.log("Invalid input! Try again!")
                break;
        }
    }
}

module.exports = Game;