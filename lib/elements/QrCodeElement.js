import { ElementType } from "./ElementType.js";
import { TextBarcodeElement } from "./TextBarcodeElement.js";
export class QrCodeElement extends TextBarcodeElement {
    Version;
    Type = ElementType.QrCode;
    Fnc1;
    Version;
    constructor(value, placement, xOffset = 0, yOffset = 0) {
        super(value, placement, xOffset, yOffset)
    }
}