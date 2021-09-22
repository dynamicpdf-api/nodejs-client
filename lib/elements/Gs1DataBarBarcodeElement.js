import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents a GS1DataBar barcode element. */
export class Gs1DataBarBarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    Height;

    get Gs1DataBarType() {
        return this._Type;
    }

    /**
     * Initializes a new instance of the `Gs1DataBarBarcodeElement` class.
     * @param {string} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} height The height of the barcode.
     * @param {number} type The GS1DataBarType of the barcode.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, height, type, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
        this.Gs1DataBarType = type;
        this._Type = ElementType.Gs1DataBarBarcode;
    }
    
    toJSON() {
        return {
            height: this.Height,
            gs1DataBarType: this._Type
        };
    }
}