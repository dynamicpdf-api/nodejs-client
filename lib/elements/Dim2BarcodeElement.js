import { BarcodeElement } from "./BarcodeElement.js";
import { valueType } from "./ValueType.js";

/** The base class for 2 dimensional bar codes (Aztec, Pdf417, DataMatrixBarcode and QrCode). */
export class Dim2BarcodeElement extends BarcodeElement {

    valueType = valueType.string;

    constructor(value, placement, xOffset, yOffset) {
        if (typeof (value) === "string") {
            super(value, placement, xOffset, yOffset);
        }
        else {
            this.valueType = valueType.base64EncodedBytes;
            super.value = Convert.ToBase64String(value);
            super.placement = placement;
            super.xOffset = xOffset;
            super.yOffset = yOffset;
        }
    }

    toJSON() {
        return {
            valueType: this.valueType,
            xOffset: super.xOffset,
            yOffset: super.yOffset,
            placement: super.placement,
            value: super.value,
            color:this._ColorName
        };
    }
}