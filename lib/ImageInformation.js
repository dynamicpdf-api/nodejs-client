/** Represents an image information. */
export class ImageInformation {

    /** Gets page number of the pdf where the image is present. */
    pageNumber;

    /** Gets the width of the image. */
    width;

    /** Gets the height of the image. */
    height;

    /**Gets the horizontalDpi of the image. */
    horizontalDpi;

    /** Gets the verticalDpi of the image. */
    verticalDpi;

    /** Gets the number of color components present in the image. */
    numberOfComponents;

    /** Gets the bits per component of the image. */
    bitsPerComponent;

    /** Gets the color space of the image. */
    colorSpace;

    toJSON() {
        return {
            pageNumber: this.pageNumber,
            width: this.width,
            height: this.height,
            horizontalDpi: this.horizontalDpi,
            verticalDpi: this.verticalDpi,
            numberOfComponents: this.numberOfComponents,
            bitsPerComponent: this.bitsPerComponent,
            colorSpace: this.colorSpace
        };
    }
}