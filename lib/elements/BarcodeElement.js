import { Element } from "./Element.js";

/**Base class from which barcode page elements are derived. */
export class BarcodeElement extends Element {


    _ColorName;

    #color;

    /** Gets or sets the XDimension of the barcode. */
    XDimension;

    /** Gets the value of the barcode. */
    get Value() {

        return this._InputValue;
    }
    /** sets the value of the barcode. */
    set Value(input) {
        this._InputValue = input;
    }

    /** gets the Color of the barcode. */
    get Color() {
        return this.#color;
    }
    /** sets the Color of the barcode.*/
    set Color(value) {
        this.#color = value;
        this._ColorName = this.#color.ColorString;
    }

    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }

    toJSON() {
        return {
            xDimension: this.XDimension,
            value: this.Value,
            color: this._ColorName,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement:this.Placement
        };
    }
}