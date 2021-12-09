import { elementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementPlacement } from "./ElementPlacement.js";

/** Represents a MSI Barcode element (also known as Modified Plessey). */
export class MsiBarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    height;

    /** Gets or sets a value specifying if the check digit should calculated. */
    appendCheckDigit;

    /**
     * Initializes a new instance of the `MsiBarcodeElement` class.
     * @param {string} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} height The height of the barcode.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset)
        this.height = height;
        this._Type = elementType.msiBarcode;
    }

    toJSON() {
        return {
            height: this.height,
            appendCheckDigit: this.appendCheckDigit,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}