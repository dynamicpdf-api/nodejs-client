import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class Code128BarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Code128Barcode;
    UccEan128;
    ProcessTilde;
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
    }
}