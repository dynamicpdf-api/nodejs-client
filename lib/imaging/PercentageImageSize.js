import { ImageSize } from "./ImageSize.js";
import { imageSizeType } from "./ImageSizeType.js";

export class PercentageImageSize extends ImageSize {
    constructor(horizontalPercentage = null, verticalPercentage = null) {
        super(imageSizeType.Percentage);
        this.horizontalPercentage = horizontalPercentage;
        this.verticalPercentage = verticalPercentage;
    }
}