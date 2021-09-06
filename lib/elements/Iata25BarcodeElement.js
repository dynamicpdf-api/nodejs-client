import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents an IATA 2 of 5 barcode element.
 * This class can be used to place an IATA 2 of 5 barcode on a page.
 */
export class Iata25BarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    Height;

    /** Gets or sets a value indicating if the check digit should be added to the value. */
    IncludeCheckDigit;

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
        this.Height = height;
        super.Type = ElementType.Iata25Barcode;
    }
}