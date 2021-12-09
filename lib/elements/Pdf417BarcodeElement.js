import { elementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementPlacement } from "./ElementPlacement.js";
/**
 * Represents Pdf417 barcode element.
 * This class can be used to generate Pdf417 barcode symbol.
 */
export class Pdf417BarcodeElement extends TextBarcodeElement {

    /** Gets or sets the columns of the barcode. */
    columns;

    /** Gets or sets the YDimension of the barcode. */
    yDimension;

    /** Gets or Sets a boolean indicating whether to process the tilde character. */
    processTilde;

    /** Gets or sets the Compact Pdf417. */
    compactPdf417;

    /** Gets or sets the error correction level for the PDF417 barcode. */
    errorCorrection;

    /** Gets or sets the type of compaction. */
    compaction;

    /**
     * Initializes a new instance of the `Pdf417BarcodeElement` class.
     * @param {string | Buffer[]} value String to be encoded | buffer array.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} columns Columns of the PDF417 barcode.
     * @param {number} xOffset The X coordinate of the PDF417 barcode.
     * @param {number} yOffset The Y coordinate of the PDF417 barcode.
     */
    constructor(value, placement, columns, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset)
        this.columns = columns;
        this._Type = elementType.pdf417Barcode;
    }

    toJSON() {
        return {
            columns: this.columns,
            yDimension: this.yDimension,
            processTilde: this.processTilde,
            compactPdf417: this.compactPdf417,
            errorCorrection: this.errorCorrection,
            compaction: this.compaction,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}