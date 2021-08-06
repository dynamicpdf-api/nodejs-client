import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
export class MsiBarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.MsiBarcode;
    AppendCheckDigit;
    constructor(value, placement, height, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
        this.Height = height;
    }
}