import { BarcodeElement } from "./BarcodeElement.js";
import { ValueType } from "./ValueType.js";
export class Dim2BarcodeElement extends BarcodeElement {
    ValueType = ValueType.String;
    constructor(value, placement, xOffset, yOffset) {
        if (typeof (value) === "string") {
            super(value, placement, xOffset, yOffset);
        }
        else {
            this.ValueType = ValueType.Base64EncodedBytes;
            this.Value = Convert.ToBase64String(value);
            Placement = placement;
            XOffset = xOffset;
            YOffset = yOffset;
        }
    }
}