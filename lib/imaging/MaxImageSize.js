import { ImageSize } from "./ImageSize.js";
import { imageSizeType } from "./ImageSizeType.js";

export class MaxImageSize extends ImageSize {
    constructor(maxWidth = null, maxHeight = null, unit = null) {
        super(imageSizeType.Max);
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.unit = unit;
    }
}