import { ImageFormat } from "./ImageFormat.js";
import { imageFormatType } from "./ImageFormatType.js";
export class BmpImageFormat extends ImageFormat {
    constructor(colorFormat) {
        super(imageFormatType.BMP);
        this.colorFormat = colorFormat;
    }
}