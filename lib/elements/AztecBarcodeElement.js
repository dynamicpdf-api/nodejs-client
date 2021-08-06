import { Dim2BarcodeElement } from "./Dim2BarcodeElement.js";
import { ElementType } from "./ElementType.js";
export class AztecBarcodeElement extends Dim2BarcodeElement {
    Type = ElementType.AztecBarcode;
    ProcessTilde;
    AztecSymbolSize;
    ErrorCorrection;
    ReaderInitializationSymbol;
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
}