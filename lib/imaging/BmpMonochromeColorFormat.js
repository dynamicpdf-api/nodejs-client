import { BmpColorFormat } from "./BmpColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";

export class BmpMonochromeColorFormat extends BmpColorFormat {
    constructor(blackThreshold = null, ditheringPercent = null, ditheringAlgorithm = null) {
        super(colorFormatType.Monochrome);
        this.blackThreshold = blackThreshold;
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}