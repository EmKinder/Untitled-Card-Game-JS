enum CardTypes {
    Water = 0, 
    Ice = 1, 
    Fire = 2,
}

enum CardColours {
    Red = 0,
    Orange = 1, 
    Yellow = 2, 
    Green = 3, 
    Blue = 4, 
    Purple = 5
}

export default class Card{
    value: number;
    type: CardTypes;
    colour: CardColours;

    constructor(type: CardTypes, value: number, colour: CardColours){
        this.type = type; 
        this.value = value;
        this.colour = colour;
    }
}