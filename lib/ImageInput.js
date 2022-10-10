import { inputType } from "./InputType.js";
import { Input } from "./Input.js";
import { align } from "./Align.js";
import { vAlign } from "./VAlign.js";
import { ImageResource } from "./ImageResource.js";

/**
 * Represents an image input.
 */
export class ImageInput extends Input {

    /**
     * Initializes a new instance of the `ImageInput` class. 
     * @param {ImageResource | string} resource object to create ImageInput. | The image file path present in cloud resource manager.
     */
    constructor(resource) {
        super(resource);
        this._Type = inputType.image;
    }

    /** Gets or sets the scaleX of the image.  */
    scaleX;

    /** Gets or sets the scaleY of the image. */
    scaleY;

    /** Gets or sets a boolean indicating whether to expand the image. */
    expandToFit;

    /** Gets or sets a boolean indicating whether to shrink the image. */
    shrinkToFit;

    /** Gets or sets the horizontal alignment of the image. */
    align = align.center;

    /** Gets or sets the vertical alignment of the image. */
    vAlign = vAlign.center;

    /** Gets or sets the start page. */
    startPage;

    /** Gets or sets the page count. */
    pageCount;

    toJSON() {
        return {
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            topMargin: this.topMargin,
            leftMargin: this.leftMargin,
            bottomMargin: this.bottomMargin,
            rightMargin: this.rightMargin,
            pageWidth: this.pageWidth,
            pageHeight: this.pageHeight,
            expandToFit: this.expandToFit,
            shrinkToFit: this.shrinkToFit,
            align: this.align,
            vAlign: this.vAlign,
            startPage: this.startPage,
            pageCount: this.pageCount,
            type: this._Type,
            resourceName: this.resourceName,
            id: this.id,
            templateId: this._templateId,
        }
    }
}