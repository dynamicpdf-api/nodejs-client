import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";
import { StackedGs1DataBarType } from "./StackedGs1DataBarType.js";

/** Represents a StackedGS1DataBar barcode element. */
export class StackedGs1DataBarBarcodeElement extends TextBarcodeElement {
    
    StackedGs1DataBarType;

    /** Gets or sets the row height of the barcode. */
    RowHeight;

    /** Gets or Sets the segment count of the Expanded Stacked barcode. */
    ExpandedStackedSegmentCount;

    /**
     * Initializes a new instance of the `StackedGs1DataBarBarcodeElement` class.
     * @param {string} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {StackedGs1DataBarType} stackedGs1DataBarType The StackedGS1DataBarType of the barcode.
     * @param {number} rowHeight The row height of the barcode.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, stackedGs1DataBarType, rowHeight, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset);
        this.StackedGs1DataBarType = stackedGs1DataBarType;
        this.RowHeight = rowHeight;
        super.Type = ElementType.Code39Barcode;
    }
}