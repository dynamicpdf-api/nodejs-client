import { DataMatrixEncodingType } from "./DataMatrixEncodingType.js";
import { ElementType } from "./ElementType.js";
import { Dim2BarcodeElement } from "./Dim2BarcodeElement.js";
import { DataMatrixFunctionCharacter } from "./DataMatrixFunctionCharacter.js"
import { DataMatrixSymbolSize } from "./DataMatrixSymbolSize.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents a Data Matrix  barcode element.
 * With some of the .Net runtimes (example: .Net Core 2.0), the ECI values 20, 28, 29 and 30 will give the error "No data is available 
 * for encoding 'code page number'. For information on defining a custom encoding, see the documentation for the Encoding.RegisterProvider method.". 
*/
export class DataMatrixBarcodeElement extends Dim2BarcodeElement {
    
    DataMatrixSymbolSize;

    DataMatrixEncodingType;

    DataMatrixFunctionCharacter;
    
    Value;

    /** Gets or sets whether to process tilde character.
     * Setting `true` will check for ~ character and processes it for FNC1 or ECI characters.
     * With some of the .Net runtimes (example: .Net Core 2.0), the ECI values 20, 28, 29 and 30 will give the error "No data is available 
     * for encoding 'code page number'. For information on defining a custom encoding, see the documentation for the Encoding.RegisterProvider method.". 
    */
    ProcessTilde;

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
    constructor(value, placement, xOffset, yOffset, symbolsize = DataMatrixSymbolSize.Auto, encodingType = DataMatrixEncodingType.Auto, functionCharacter = DataMatrixFunctionCharacter.None) {
        super(value, placement, xOffset, yOffset);
        this.Value = value;
        this.DatamatrixSymbolSize = symbolsize;
        this.DataMatrixEncodingType = encodingType;
        this.DataMatrixFunctionCharacter = functionCharacter;
        super.Type = ElementType.DataMatrixBarcode;
    }
}