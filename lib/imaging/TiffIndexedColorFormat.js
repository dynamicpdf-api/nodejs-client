import { TiffColorFormat } from "./TiffColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";

export class TiffIndexedColorFormat extends TiffColorFormat {
    constructor(quantizationAlgorithm = null, ditheringPercent = null, ditheringAlgorithm = null) {
        super(colorFormatType.Indexed);
        this.quantizationAlgorithm = quantizationAlgorithm;
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}