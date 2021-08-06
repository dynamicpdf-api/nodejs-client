import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class Code11BarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Code11Barcode;
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
    }
}