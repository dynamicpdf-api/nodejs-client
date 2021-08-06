import { TextBarcodeElement } from "./TextBarcodeElement.js";
import { ElementType } from "./ElementType.js";
import { Gs1DataBarType } from "./Gs1DataBarType.js";
export class Gs1DataBarBarcodeElement extends TextBarcodeElement {
    Height;
    Type = ElementType.Gs1DataBarBarcode;
    get Gs1DataBarType() {
        return this.Type;
    }
    constructor(value, placement, height, type, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this.Height = height;
        this.Gs1DataBarType = type;
    }
}