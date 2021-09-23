import { Dim2BarcodeElement } from "./Dim2BarcodeElement.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";
/**
 * Represents an Aztec barcode element.
 */
export class AztecBarcodeElement extends Dim2BarcodeElement {

    /** Gets or Sets a boolean indicating whether to process tilde symbol in the input.
     * Setting <b>true</b> will check for ~ character and processes it for FNC1 or ECI characters.
     */
    ProcessTilde;

    /**Gets or Sets the barcode size, `AztecSymbolSize`. */
    SymbolSize;

    /** Gets or Sets the error correction value.
     * Error correction value may be between 5% to 95%.
     */
    AztecErrorCorrection;

    /** 
     * Gets or Sets a boolean representing if the barcode is a reader initialization symbol.
     * Setting <b>true</b> will mark the symbol as reader initialization symbol
     * and the size of the symbol should be one of the following, R15xC15 Compact, R19xC19, R23xC23, R27xC27, R31xC31, R37xC37, R41xC41, R45xC45, R49xC49, R53xC53, R57xC57, R61xC61, R67xC67, R71xC71, R75xC75,
     * R79xC79, R83xC83, R87xC87, R91xC91, R95xC95, R101xC101, R105xC105, R109xC109, however it is recommended to set Auto.
     */
    ReaderInitializationSymbol;

    /**
     * Initializes a new instance of the `AztecBarcodeElement` class.
     * @param {string | Buffer []} value The value of the barcode.
     * @param {ElementPlacement} placement The placement of the barcode on the page.
     * @param {number} xOffset The X coordinate of the barcode.
     * @param {number} yOffset The Y coordinate of the barcode.
     */
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
        this._Type = ElementType.AztecBarcode;
    }

    toJSON() {
        return {
            aztecErrorCorrection: this.AztecErrorCorrection,
            processTilde: this.ProcessTilde,
            symbolSize: this.SymbolSize,
            readerInitializationSymbol: this.ReaderInitializationSymbol,
            type: this._Type,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement: this.Placement,
            value: super.Value
        };
    }
}