import { elementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementPlacement } from "./ElementPlacement.js";

/**
 * Represents a QR code barcode element.
 */
export class QrCodeElement extends TextBarcodeElement {

    /** Gets or sets the QR code version.*/
    version;

    /**Gets or sets FNC1 mode. */
    fnc1;

    /**
     * Initializes a new instance of the `QrCodeElement` class.
     * @param {string |buffer[]} value The value of the QR code.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} xOffset The X coordinate of the QR code.
     * @param {number} yOffset The Y coordinate of the QR code.
     */
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset)
        this._Type = elementType.qrCode;
    }

    toJSON() {
        return {
            fnc1: this.fnc1,
            version: this.version,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}