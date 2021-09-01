import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementPlacement } from "./ElementPlacement.js";
/**
 * Represents Pdf417 barcode element.
 * This class can be used to generate Pdf417 barcode symbol.
 */
export class Pdf417BarcodeElement extends TextBarcodeElement {

    /** Gets or sets the columns of the barcode. */
    Columns;

    /** Gets or sets the YDimension of the barcode. */
    YDimension;

    /** Gets or Sets a boolean indicating whether to process the tilde character. */
    ProcessTilde;

    /** Gets or sets the Compact Pdf417. */
    CompactPdf417;

    /** Gets or sets the error correction level for the PDF417 barcode. */
    ErrorCorrection;

    /** Gets or sets the type of compaction. */
    Compaction;

    /**
     * Initializes a new instance of the `Pdf417BarcodeElement` class.
     * @param {string | Buffer[]} value String to be encoded | buffer array.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} columns Columns of the PDF417 barcode.
     * @param {number} xOffset The X coordinate of the PDF417 barcode.
     * @param {number} yOffset The Y coordinate of the PDF417 barcode.
     */
    constructor(value, placement, columns, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
        this.Columns = columns;
        super.Type = ElementType.Pdf417Barcode;
    }
}