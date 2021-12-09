import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";

/** Represents a GS1DataBar barcode element. */
export class Gs1DataBarBarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode. */
    height;

    #type;

    get gs1DataBarType() {
        return this.#type;
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
        this.height = height;
        this.gs1DataBarType = type;
        this._Type = elementType.gs1DataBarBarcode;
    }

    toJSON() {
        return {
            height: this.height,
            gs1DataBarType: this.gs1DataBarType,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            color:this._ColorName
        };
    }
}