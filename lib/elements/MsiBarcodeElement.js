import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents a MSI Barcode element (also known as Modified Plessey). */
export class MsiBarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    Height;

    /** Gets or sets a value specifying if the check digit should calculated. */
    AppendCheckDigit;

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
        this.Height = height;
        this._Type = ElementType.MsiBarcode;
    }

    toJSON() {
        return {
            height: this.Height,
            appendCheckDigit: this.AppendCheckDigit,
            type: this._Type,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement: this.Placement,
            value: super.Value,
            color:this._ColorName
        };
    }
}