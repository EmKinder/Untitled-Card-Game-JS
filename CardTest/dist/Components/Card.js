var CardTypes;
(function (CardTypes) {
    CardTypes[CardTypes["Water"] = 0] = "Water";
    CardTypes[CardTypes["Ice"] = 1] = "Ice";
    CardTypes[CardTypes["Fire"] = 2] = "Fire";
})(CardTypes || (CardTypes = {}));
var CardColours;
(function (CardColours) {
    CardColours[CardColours["Red"] = 0] = "Red";
    CardColours[CardColours["Orange"] = 1] = "Orange";
    CardColours[CardColours["Yellow"] = 2] = "Yellow";
    CardColours[CardColours["Green"] = 3] = "Green";
    CardColours[CardColours["Blue"] = 4] = "Blue";
    CardColours[CardColours["Purple"] = 5] = "Purple";
})(CardColours || (CardColours = {}));
export default class Card {
    constructor(type, value, colour) {
        this.type = type;
        this.value = value;
        this.colour = colour;
    }
}
