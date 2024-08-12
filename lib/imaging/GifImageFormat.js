import { ImageFormat } from "./ImageFormat.js";
import { imageFormatType } from "./ImageFormatType.js";

export class GifImageFormat extends ImageFormat {
    constructor(ditheringPercent = null, ditheringAlgorithm = null) {
        super(imageFormatType.GIF);
        this.ditheringPercent = ditheringPercent;
        this.ditheringAlgorithm = ditheringAlgorithm;
    }
}