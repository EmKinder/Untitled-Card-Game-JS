enum CardTypes {
    Water = 0, 
    Ice = 1, 
    Fire = 2,
}

export default class Card{
    value: number;
    type: CardTypes;

    constructor(type: CardTypes, value: number){
        this.type = type; 
        this.value = value;
    }
}