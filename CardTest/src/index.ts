import Deck from "./Components/Deck.js";
import Card from "./Components/Card.js"

let playerDeck = new Deck(); 
let playerInHand = new Deck();
let playerDiscarded = new Deck();

let otherDeck = new Deck(); 
let otherInHand = new Deck(); 
let otherDiscarded = new Deck();

for(let i = 0; i < 3; i++){
    for(let j = 3; j <= 12; j++){
        playerDeck.addCard(new Card(i, j));
        otherDeck.addCard(new Card(i, j));
    }
}

playerDeck.shuffle();
otherDeck.shuffle();

for(let i = 0; i < 5; i++){
    playerInHand.addCard(playerDeck.drawCard()!);
    otherInHand.addCard(otherDeck.drawCard()!);
}

playerInHand.printCards();

document.addEventListener('keydown', (e: KeyboardEvent)=>{
    if(e.code === 'Digit1'){
        Turn(0);
    }
    if(e.code === 'Digit2'){
        Turn(1);
    }
    if(e.code === 'Digit3'){
        Turn(2);
    }
    if(e.code === 'Digit4'){
        Turn(3);
    }
    if(e.code === 'Digit5'){
        Turn(4);
    }
});

function Turn(cardIdx: number){
    const thisPlayerChoice = playerInHand.removeAtIndex(cardIdx);
    const thisOtherChoice = otherInHand.removeAtIndex(Math.floor(Math.random() * 5));

    if(thisPlayerChoice?.type === thisOtherChoice?.type){
        if(thisPlayerChoice!.value > thisOtherChoice!.value){
            console.log("Player Wins!");
        }
        else if(thisPlayerChoice!.value < thisOtherChoice!.value){
            console.log("Enemy Wins!");
        }
        else {
            console.log("Draw");
        }
    }
    else if(((thisPlayerChoice!.type as number !== 0 && 
            (thisPlayerChoice!.type as number) > (thisOtherChoice!.type as number))
            || thisPlayerChoice!.type as number === 0 && thisOtherChoice!.type as number === 2)){
                console.log("Player Wins!");
            }
            else{
                console.log("Enemy Wins!");
            }
        
    console.log("Player card: " + thisPlayerChoice?.type + thisPlayerChoice?.value);
    console.log("Other card: " + thisOtherChoice?.type + thisOtherChoice?.value);

    console.log("Drawing new card...");

    playerDiscarded.addCard(thisPlayerChoice!);
    otherDiscarded.addCard(thisOtherChoice!);

    if(playerDeck.length() <= 5){
       for(let i = playerDiscarded.length(); i >= 0; i--){
            playerDeck.addCard(playerDiscarded.peekAtIndex(i))
            playerDiscarded.removeAtIndex(i);
       }
       console.log("Discarded cards added to player deck");
       playerDeck.shuffle();
    }

    if(otherDeck.length() <= 5){
        for(let i = otherDiscarded.length(); i >= 0; i--){
             otherDeck.addCard(otherDiscarded.peekAtIndex(i))
             otherDiscarded.removeAtIndex(i);
        }
        console.log("Discarded cards added to other deck");
        otherDeck.shuffle();
     }

    playerInHand.addCard(playerDeck.drawCard()!);
    otherInHand.addCard(otherDeck.drawCard()!);

    playerInHand.printCards();

}