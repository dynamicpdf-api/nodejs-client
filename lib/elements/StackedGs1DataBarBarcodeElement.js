import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";
import { stackedGs1DataBarType } from "./StackedGs1DataBarType.js";

/** Represents a StackedGS1DataBar barcode element. */
export class StackedGs1DataBarBarcodeElement extends TextBarcodeElement {

    stackedGs1DataBarType;

    /** Gets or sets the row height of the barcode. */
    rowHeight;

    /** Gets or Sets the segment count of the Expanded Stacked barcode. */
    expandedStackedSegmentCount;

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
        this.stackedGs1DataBarType = stackedGs1DataBarType;
        this.rowHeight = rowHeight;
        this._Type = elementType.code39Barcode;
    }

    toJSON() {
        return {
            stackedGs1DataBarType: this.stackedGs1DataBarType,
            expandedStackedSegmentCount: this.expandedStackedSegmentCount,
            rowHeight: this.rowHeight,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            value: super.value,
            color: this._ColorName
        };
    }
}