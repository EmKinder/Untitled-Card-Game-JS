import Deck from "./Components/Deck.js";
import Card from "./Components/Card.js";
import ScoreManager from "./Components/ScoreManager.js";
let playerDeck = new Deck();
let playerInHand = new Deck();
let playerDiscarded = new Deck();
let otherDeck = new Deck();
let otherInHand = new Deck();
let otherDiscarded = new Deck();
let PlayerScore = [[], [], []];
let scoreManager = new ScoreManager();
for (let i = 0; i < 3; i++) {
    for (let j = 3; j <= 12; j++) {
        for (let k = 0; k <= 6; k++) {
            playerDeck.addCard(new Card(i, j, k));
            otherDeck.addCard(new Card(i, j, k));
        }
    }
}
playerDeck.shuffle();
otherDeck.shuffle();
for (let i = 0; i < 5; i++) {
    playerInHand.addCard(playerDeck.drawCard());
    otherInHand.addCard(otherDeck.drawCard());
}
playerInHand.printCards();
document.addEventListener('keydown', (e) => {
    if (e.code === 'Digit1') {
        Turn(0);
    }
    if (e.code === 'Digit2') {
        Turn(1);
    }
    if (e.code === 'Digit3') {
        Turn(2);
    }
    if (e.code === 'Digit4') {
        Turn(3);
    }
    if (e.code === 'Digit5') {
        Turn(4);
    }
});
function Turn(cardIdx) {
    const thisPlayerChoice = playerInHand.removeAtIndex(cardIdx);
    const thisOtherChoice = otherInHand.removeAtIndex(Math.floor(Math.random() * 5));
    if ((thisPlayerChoice === null || thisPlayerChoice === void 0 ? void 0 : thisPlayerChoice.type) === (thisOtherChoice === null || thisOtherChoice === void 0 ? void 0 : thisOtherChoice.type)) {
        if (thisPlayerChoice.value > thisOtherChoice.value) {
            console.log("Player Wins!");
        }
        else if (thisPlayerChoice.value < thisOtherChoice.value) {
            console.log("Enemy Wins!");
        }
        else {
            console.log("Draw");
        }
    }
    else if (((thisPlayerChoice.type !== 0 &&
        thisPlayerChoice.type > thisOtherChoice.type)
        || thisPlayerChoice.type === 0 && thisOtherChoice.type === 2)) {
        console.log("Player Wins!");
    }
    else {
        console.log("Enemy Wins!");
    }
    console.log("Player card: " + (thisPlayerChoice === null || thisPlayerChoice === void 0 ? void 0 : thisPlayerChoice.type) + (thisPlayerChoice === null || thisPlayerChoice === void 0 ? void 0 : thisPlayerChoice.value));
    console.log("Other card: " + (thisOtherChoice === null || thisOtherChoice === void 0 ? void 0 : thisOtherChoice.type) + (thisOtherChoice === null || thisOtherChoice === void 0 ? void 0 : thisOtherChoice.value));
    scoreManager.AddCard(PlayerScore, thisPlayerChoice);
    console.log("Drawing new card...");
    playerDiscarded.addCard(thisPlayerChoice);
    otherDiscarded.addCard(thisOtherChoice);
    if (playerDeck.length() <= 5) {
        for (let i = playerDiscarded.length(); i >= 0; i--) {
            playerDeck.addCard(playerDiscarded.peekAtIndex(i));
            playerDiscarded.removeAtIndex(i);
        }
        console.log("Discarded cards added to player deck");
        playerDeck.shuffle();
    }
    if (otherDeck.length() <= 5) {
        for (let i = otherDiscarded.length(); i >= 0; i--) {
            otherDeck.addCard(otherDiscarded.peekAtIndex(i));
            otherDiscarded.removeAtIndex(i);
        }
        console.log("Discarded cards added to other deck");
        otherDeck.shuffle();
    }
    playerInHand.addCard(playerDeck.drawCard());
    otherInHand.addCard(otherDeck.drawCard());
    playerInHand.printCards();
}
