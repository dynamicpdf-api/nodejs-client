import { InputType } from "./InputType.js";
import { Input } from "./Input.js";
import { Align } from "./Align.js";
import { VAlign } from "./VAlign.js";
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
        this._Type = InputType.Image;
    }

    /** Gets or sets the scaleX of the image.  */
    ScaleX;

    /** Gets or sets the scaleY of the image. */
    ScaleY;

    /** Gets or sets the top margin. */
    TopMargin;

    /** Gets or sets the left margin. */
    LeftMargin;

    /** Gets or sets the bottom margin. */
    BottomMargin;

    /** Gets or sets the right margin. */
    RightMargin;

    /** Gets or sets the page width. */
    PageWidth;

    /** Gets or sets the page height. */
    PageHeight;

    /** Gets or sets a boolean indicating whether to expand the image. */
    ExpandToFit;

    /** Gets or sets a boolean indicating whether to shrink the image. */
    ShrinkToFit;

    /** Gets or sets the horizontal alignment of the image. */
    Align = Align.Center;

    /** Gets or sets the vertical alignment of the image. */
    VAlign = VAlign.Center;

    /** Gets or sets the start page. */
    StartPage;

    /** Gets or sets the page count. */
    PageCount;

    toJSON() {
        return {
            scaleX: this.ScaleX,
            scaleY: this.ScaleY,
            topMargin: this.TopMargin,
            leftMargin: this.LeftMargin,
            bottomMargin: this.BottomMargin,
            rightMargin: this.RightMargin,
            pageWidth: this.PageWidth,
            pageHeight: this.PageHeight,
            expandToFit: this.ExpandToFit,
            shrinkToFit: this.ShrinkToFit,
            align: this.Align,
            vAlign: this.VAlign,
            startPage: this.StartPage,
            pageCount: this.PageCount,
            type: this._Type,
            resourceName: this.ResourceName
        }
    }
}