import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementPlacement } from "./ElementPlacement.js";

/**
 * Represents a QR code barcode element.
 */
export class QrCodeElement extends TextBarcodeElement {

    /** Gets or sets the QR code version.*/
    Version;

    /**Gets or sets FNC1 mode. */
    Fnc1;

    /**
     * Initializes a new instance of the `QrCodeElement` class.
     * @param {string |buffer[]} value The value of the QR code.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} xOffset The X coordinate of the QR code.
     * @param {number} yOffset The Y coordinate of the QR code.
     */
    constructor(value, placement, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
        super.Type = ElementType.QrCode;
    }
}