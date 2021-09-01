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
    constructor(value, placement, height, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
        this.Height = height;
        super.Type = ElementType.MsiBarcode;
    }
}