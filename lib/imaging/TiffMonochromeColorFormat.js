import { TiffColorFormat } from "./TiffColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";

export class TiffMonochromeColorFormat extends TiffColorFormat {
    constructor(blackThreshold = null, compressionType = null, ditheringPercent = null, ditheringAlgorithm = null) {
        super(colorFormatType.Monochrome);
        this.blackThreshold = blackThreshold;
        this.compressionType = compressionType;
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}