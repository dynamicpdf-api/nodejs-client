import { BarcodeElement } from "./BarcodeElement.js";
import { ValueType } from "./ValueType.js";

/** The base class for 2 dimensional bar codes (Aztec, Pdf417, DataMatrixBarcode and QrCode). */
export class Dim2BarcodeElement extends BarcodeElement {

    ValueType = ValueType.String;

    constructor(value, placement, xOffset, yOffset) {
        if (typeof (value) === "string") {
            super(value, placement, xOffset, yOffset);
        }
        else {
            this.ValueType = ValueType.Base64EncodedBytes;
            super.Value = Convert.ToBase64String(value);
            super.Placement = placement;
            super.XOffset = xOffset;
            super.YOffset = yOffset;
        }
    }

    toJSON() {
        return {
            valueType: this.ValueType,
            xOffset: super.XOffset,
            yOffset: super.YOffset,
            placement: super.Placement,
            value: super.Value,
            color:this._ColorName
        };
    }
}