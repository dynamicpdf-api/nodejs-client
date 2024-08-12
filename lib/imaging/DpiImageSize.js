import { ImageSize } from "./ImageSize.js";
import { imageSizeType } from "./ImageSizeType.js";
export class DpiImageSize extends ImageSize {
    constructor(horizontalDpi = null, verticalDpi = null) {
        super(imageSizeType.Dpi);
        this.horizontalDpi = horizontalDpi;
        this.verticalDpi = verticalDpi;
    }
}