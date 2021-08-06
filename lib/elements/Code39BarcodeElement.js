import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class Code39BarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Code39Barcode;
    constructor(value, placement, height, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
    }
}