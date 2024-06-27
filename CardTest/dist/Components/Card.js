var CardTypes;
(function (CardTypes) {
    CardTypes[CardTypes["Water"] = 0] = "Water";
    CardTypes[CardTypes["Ice"] = 1] = "Ice";
    CardTypes[CardTypes["Fire"] = 2] = "Fire";
})(CardTypes || (CardTypes = {}));
export default class Card {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
