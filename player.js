class Player {
    constructor(name, choice){
        this.name = name;
        this.score = 0;
        this.choice = choice;
        this.gestureList = ["rock","paper","scissors","lizard","spock"]
    }

    chooseGesture(){
        console.log("Choose your gesture:");
        for (let i = 0; i < this.gestureList.length; i++) {
            console.log(`Enter ${i} for ${this.gestureList[i]}`);
        }
        this.choice = this.gestureList[parseInt(prompt())]
        if (this.choice <= this.gestureList.length) {
            console.log(`${this.name} selected ${this.choice}`);
        }else{
            console.log("Please enter a valid selection");
            chooseGesture();
        }
    }

    defineName(){
        break;
    }

}

module.exports.Player = Player;
