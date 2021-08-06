import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class StackedGs1DataBarBarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Code39Barcode;
    StackedGs1DataBarType;
    RowHeight;
    ExpandedStackedSegmentCount;
    constructor(value, placement, stackedGs1DataBarType, rowHeight, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset);
        this.StackedGs1DataBarType = stackedGs1DataBarType;
        this.RowHeight = rowHeight;
    }
}