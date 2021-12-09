import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";

/** Represents an IATA 2 of 5 barcode element.
 * This class can be used to place an IATA 2 of 5 barcode on a page.
 */
export class Iata25BarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    height;

    /** Gets or sets a value indicating if the check digit should be added to the value. */
    includeCheckDigit;

    /**
     * Initializes a new instance of the `Iata25BarcodeElement` class.
     * @param {string} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} height The height of the barcode.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.height = height;
        this._Type = elementType.iata25Barcode;
    }

    toJSON() {
        return {
            height: this.height,
            includeCheckDigit: this.includeCheckDigit,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement,
            color:this._ColorName
        };
    }
}