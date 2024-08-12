import { ImageFormat } from "./ImageFormat.js";
import {imageFormatType} from "./ImageFormatType.js"

export class TiffImageFormat extends ImageFormat {
    constructor(multiPage = false, colorFormat) {
        super(imageFormatType.TIFF);
        this.multiPage = multiPage;
        this.colorFormat = colorFormat;
    }
}