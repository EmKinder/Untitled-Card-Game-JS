export default class Deck {
    constructor() {
        this.deck = [];
    }
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    addCard(card) {
        this.deck.push(card);
    }
    drawCard() {
        if (this.deck.length < 0)
            return;
        return this.deck.pop();
    }
    isEmpty() {
        return this.deck.length === 0;
    }
    length() {
        return this.deck.length;
    }
    peekAtIndex(idx) {
        return this.deck[idx];
    }
    removeAtIndex(idx) {
        if (idx >= 0 && idx < this.deck.length) {
            return this.deck.splice(idx, 1)[0];
        }
        else {
            return null;
        }
    }
    printCards() {
        for (let i = 0; i < this.deck.length; i++) {
            console.log("Type: " + this.deck[i].type + ", Value: " + this.deck[i].value);
        }
    }
    sortCards(low, high) {
        if (low >= high)
            return;
        let pi = this.partition(low, high);
        this.sortCards(low, pi - 1);
        this.sortCards(pi + 1, high);
    }
    partition(low, high) {
        // let pivot = sortType === "Value" ? this.deck[high].value : this.deck[high].type;
        let pivotValue = this.deck[high].value;
        //let pivotType = this.deck[high].type as number;
        let i = low - 1;
        let k = low - 1;
        for (let j = low; j <= high - 1; j++) {
            //  let cardValue = sortType === "Value" ? this.deck[j].value : this.deck[j].type;
            if (this.deck[j].value < pivotValue) {
                i++;
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
            // if (this.deck[j].type < pivotType) { 
            //   k++;
            /// [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; 
            //}
        }
        [this.deck[i + 1], this.deck[high]] = [this.deck[high], this.deck[i + 1]];
        return i + 1;
    }
}
