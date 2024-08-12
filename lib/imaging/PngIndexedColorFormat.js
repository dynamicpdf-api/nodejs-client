import { PngColorFormat } from "./PngColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";
export class PngIndexedColorFormat extends PngColorFormat {
    constructor(quantizationAlgorithm = null, ditheringPercent = null, ditheringAlgorithm = null) {
        super(colorFormatType.Indexed);
        this.quantizationAlgorithm = quantizationAlgorithm;
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}