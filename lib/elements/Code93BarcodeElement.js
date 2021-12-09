import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";

/** Represents a Code93 barcode element.*/
export class Code93BarcodeElement extends TextBarcodeElement {

    /** Gets or sets the height of the barcode.*/
    height;

    /**
     * Initializes a new instance of the `Code93BarcodeElement` class.
     * @param {string} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} height The height of the barcode.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.height = height;
        this._Type = elementType.code93Barcode;
    }

    toJSON() {
        return {
            height: this.height,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}