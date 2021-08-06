import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class Code25BarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Code25Barcode;
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
    }
}