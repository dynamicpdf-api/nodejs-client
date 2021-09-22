/** Represents an image information. */
export class ImageInformation {

    /** Gets page number of the pdf where the image is present. */
    PageNumber;

    /** Gets the width of the image. */
    Width;

    /** Gets the height of the image. */
    Height;

    /**Gets the horizontalDpi of the image. */
    HorizontalDpi;

    /** Gets the verticalDpi of the image. */
    VerticalDpi;

    /** Gets the number of color components present in the image. */
    NumberOfComponents;

    /** Gets the bits per component of the image. */
    BitsPerComponent;

    /** Gets the color space of the image. */
    ColorSpace;

    toJSON() {
        return {
            pageNumber: this.PageNumber,
            width: this.Width,
            height: this.Height,
            horizontalDpi: this.HorizontalDpi,
            verticalDpi: this.VerticalDpi,
            numberOfComponents: this.NumberOfComponents,
            bitsPerComponent: this.BitsPerComponent,
            colorSpace: this.ColorSpace
        };
    }
}