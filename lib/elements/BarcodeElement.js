import { Element } from "./Element.js";

/**Base class from which barcode page elements are derived. */
export class BarcodeElement extends Element {
    
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }

    #ColorName;
    #colorDetail;
    
    color;

    /** Gets or sets the XDimension of the barcode. */
    XDimension;

    /** Gets or sets the value of the barcode. */
    Value = this.InputValue;

    /** gets the Color of the barcode. */
    get Color() {
        return this.Color;
    }
    /** sets the Color of the barcode.*/
    set Color(value) {
        this.#colorDetail = value;
        this.color = this.#colorDetail.ColorString;
    }
}