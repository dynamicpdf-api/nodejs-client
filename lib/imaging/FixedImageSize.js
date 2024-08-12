import { ImageSize } from "./ImageSize.js";
import { imageSizeType } from "./ImageSizeType.js";

export class FixedImageSize extends ImageSize {
    constructor(width = null, height = null, unit = null) {
        super(imageSizeType.Fixed);
        this.width = width;
        this.height = height;
        this.unit = unit;
    }
}