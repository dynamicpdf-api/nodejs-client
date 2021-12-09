import { dataMatrixEncodingType } from "./DataMatrixEncodingType.js";
import { elementType } from "./ElementType.js";
import { Dim2BarcodeElement } from "./Dim2BarcodeElement.js";
import { dataMatrixFunctionCharacter } from "./DataMatrixFunctionCharacter.js"
import { dataMatrixSymbolSize } from "./DataMatrixSymbolSize.js";
import { elementPlacement } from "./ElementPlacement.js";

/** Represents a Data Matrix  barcode element.
 */
export class DataMatrixBarcodeElement extends Dim2BarcodeElement {

    _DataMatrixSymbolSize;

    _DataMatrixEncodingType;

    _DataMatrixFunctionCharacter;

    /** Gets or sets whether to process tilde character.
     * Setting `true` will check for ~ character and processes it for FNC1 or ECI characters.
     */
    processTilde;

    /**
     * Initializes a new instance of the `DataMatrixBarcodeElement` class.
     * @param {string | Buffer[]} value The value of the barcode
     * @param {ElementPlacement} placement The placement of the barcode on the page
     * @param {number} xOffset The X coordinate of the barcode
     * @param {number} yOffset The Y coordinate of the barcode.
     * @param {number} symbolsize The symbol size of the barcode.
     * @param {number} encodingType The encoding type of the barcode.
     * @param {number} functionCharacter The function character of the barcode.
     */
    constructor(value, placement, xOffset, yOffset, symbolsize = dataMatrixSymbolSize.auto, encodingType = dataMatrixEncodingType.auto, functionCharacter = dataMatrixFunctionCharacter.none) {
        super(value, placement, xOffset, yOffset);
        this._DatamatrixSymbolSize = symbolsize;
        this._DataMatrixEncodingType = encodingType;
        this._DataMatrixFunctionCharacter = functionCharacter;
        this._Type = elementType.dataMatrixBarcode;
    }
    
    toJSON() {
        return {
            dataMatrixEncodingType: this._DataMatrixEncodingType,
            dataMatrixFunctionCharacter: this._DataMatrixFunctionCharacter,
            dataMatrixSymbolSize: this._DataMatrixSymbolSize,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}