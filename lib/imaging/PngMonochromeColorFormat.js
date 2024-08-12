import { PngColorFormat } from "./PngColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";
export class PngMonochromeColorFormat extends PngColorFormat {
    constructor(blackThreshold = null, ditheringPercent = null, ditheringAlgorithm = null) {
        super(colorFormatType.Monochrome);
        this.blackThreshold = blackThreshold;
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}