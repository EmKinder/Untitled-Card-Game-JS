import Card from "./Card";

export default class ScoreManager{

    constructor(){

    }

    AddCard(player: any[], card: Card){
        player[card.type].push(card);

        this.CheckForWin(player)
    }

    CheckForWin(player: any[]){
        //check for type win 

        //check for color win
        let outputArray: any[] = []; 
        let count = 0; 
        let start = false; 
        for(const type in player){
            for(let i = 0; i < type.length; i++){
                for(let j = 0; j < outputArray.length; j++){
                    if(player[i].colour === outputArray[j]){
                        start = true;
                    }
                }
                count++;
                if(count === 1 && start === false){
                    outputArray.push(player[i].colour);
                }
                start = false;
                count = 0;
            }
        }  
        console.log(outputArray);
        if(outputArray.length >= 3){
            console.log("Colour Win!!");
        }
    }
}