import { Element } from "./Element.js";
export class BarcodeElement extends Element {
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
    #ColorName;
    #colorDetail;
    color;
    XDimension;
    Value = this.InputValue;
    get Color() {
        return this.Color;
    }
    set Color(value) {
        this.#colorDetail = value;
        this.color = this.#colorDetail.ColorString;
    }
}