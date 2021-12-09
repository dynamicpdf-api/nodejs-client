import { Element } from "./Element.js";

/**Base class from which barcode page elements are derived. */
export class BarcodeElement extends Element {


    _ColorName;

    #color;

    /** Gets or sets the XDimension of the barcode. */
    xDimension;

    /** Gets the value of the barcode. */
    get value() {

        return this._InputValue;
    }
    /** sets the value of the barcode. */
    set value(input) {
        this._InputValue = input;
    }

    /** gets the Color of the barcode. */
    get color() {
        return this.#color;
    }
    /** sets the Color of the barcode.*/
    set color(value) {
        this.#color = value;
        this._ColorName = this.#color.colorString;
    }

    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }

    toJSON() {
        return {
            xDimension: this.xDimension,
            value: this.value,
            color: this._ColorName,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement
        };
    }
}