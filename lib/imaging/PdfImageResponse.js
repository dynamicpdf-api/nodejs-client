import { Response } from "../Response.js";

export class PdfImageResponse extends Response {

    /** Gets or sets the format of the images. */
    imageFormat;

    /** Gets or sets the collection of images in the response. */
    images = []; // Array of Image objects

    /** Gets or sets the content type of the response. */
    contentType;

    /** Gets or sets the horizontal DPI (Dots Per Inch) of the images. */
    horizontalDpi;

    /** Gets or sets the vertical DPI (Dots Per Inch) of the images. */
    verticalDpi;

    toJSON() {
        return {
            imageFormat: this.imageFormat,
            images: this.images,
            contentType: this.contentType,
            horizontalDpi: this.horizontalDpi,
            verticalDpi: this.verticalDpi
        };
    }
}

export class Image {

    /** Gets or sets the page number from which the image was extracted. */
    pageNumber;

    /** Gets or sets the data of the image. */
    data;

    /** Gets or sets the number of billed pages for the image. */
    billedPages;

    /** Gets or sets the width of the image. */
    width;

    /** Gets or sets the height of the image. */
    height;

    toJSON() {
        return {
            pageNumber: this.pageNumber,
            data: this.data,
            billedPages: this.billedPages,
            width: this.width,
            height: this.height
        };
    }
}