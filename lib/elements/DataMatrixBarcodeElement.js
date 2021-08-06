import { DataMatrixEncodingType } from "./DataMatrixEncodingType.js";
import { ElementType } from "./ElementType.js";
import { Dim2BarcodeElement } from "./Dim2BarcodeElement.js";
import { DataMatrixFunctionCharacter } from "./DataMatrixFunctionCharacter.js"
import { DataMatrixSymbolSize } from "./DataMatrixSymbolSize.js";
export class DataMatrixBarcodeElement extends Dim2BarcodeElement {
    DataMatrixSymbolSize;
    DataMatrixEncodingType;
    DataMatrixFunctionCharacter;
    Type = ElementType.DataMatrixBarcode;
    Value;
    ProcessTilde;
    constructor(value, placement, xOffset, yOffset, symbolsize = DataMatrixSymbolSize.Auto, encodingType = DataMatrixEncodingType.Auto, functionCharacter = DataMatrixFunctionCharacter.None) {
        super(value, placement, xOffset, yOffset);
        this.Value = value;
        this.DatamatrixSymbolSize = symbolsize;
        this.DataMatrixEncodingType = encodingType;
        this.DataMatrixFunctionCharacter = functionCharacter;
    }
}