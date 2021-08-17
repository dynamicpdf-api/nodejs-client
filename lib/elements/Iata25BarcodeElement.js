import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class Iata25BarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Iata25Barcode;
    IncludeCheckDigit;
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
    }
}