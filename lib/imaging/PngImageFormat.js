import { ImageFormat } from "./ImageFormat.js";
import { imageFormatType } from "./ImageFormatType.js";
export class PngImageFormat extends ImageFormat {
    constructor(colorFormat) {
        super(imageFormatType.PNG);
        this.colorFormat = colorFormat;
    }
}