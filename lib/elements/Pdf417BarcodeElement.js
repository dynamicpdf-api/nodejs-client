import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
export class Pdf417BarcodeElement extends TextBarcodeElement {
    Columns;
    Type = ElementType.Pdf417Barcode;
    YDimension;
    ProcessTilde;
    CompactPdf417;
    ErrorCorrection;
    Compaction;
    constructor(value, placement, columns, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
        this.Columns = columns;
    }
}