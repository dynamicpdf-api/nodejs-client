import { ImageFormat } from "./ImageFormat.js";
import { imageFormatType } from "./ImageFormatType.js";
export class JpegImageFormat extends ImageFormat {
    constructor(quality = null) {
        super(imageFormatType.JPEG);
        this.quality = quality;
    }
}