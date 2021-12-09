import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementType } from "./ElementType.js";

/**
 * Represents a Code 128 barcode element.
 * This class can be used to place a Code 128 barcode on a page.
 */
export class Code128BarcodeElement extends TextBarcodeElement {

    /**Gets or sets the height of the barcode. */
    height;

    /**Gets or sets a boolean representing if the barcode is a UCC / EAN Code 128 barcode.
     * If `true` an FNC1 code will be the first character in the barcode.
     */
    uccEan128;

    /**Gets or Sets a boolean indicating whether to process the tilde character.
     * If `true` checks for fnc1 (~1) character in the barcode Value and checks for the inline code sets if present in the data to process.
     * Example value: "~BHello ~AWORLD 1~C2345", where ~A, ~B and ~C representing code sets A, B and C respectively.
     * However if any inline code set has invalid characters it will be shifted to an appropriate code set.
     * "\" is used as an escape character to add ~.
     */
    processTilde;

    /**
     * Initializes a new instance of the `Code128BarcodeElement` class.
     * @param {*} value The value of the barcode.
     * @param {*} placement The placement of the barcode on the page.
     * @param {*} height The height of the barcode.
     * @param {*} xOffset The X coordinate of the barcode.
     * @param {*} yOffset The Y coordinate of the barcode.
     * Code sets can be specified along with data, in order to do this `ProcessTilde` property needs to be set to `true`
     * Example value: "~BHello ~AWORLD 1~C2345", where ~A, ~B and ~C representing code sets A, B and C respectively.
     * However if any inline code set has invalid characters it will be shifted to an appropriate code set.
     */
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.height = height;
        this._Type = elementType.code128Barcode;
    }

    toJSON() {
        return {
            height: this.height,
            processTilde: this.processTilde,
            uccEan128: this.uccEan128,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}