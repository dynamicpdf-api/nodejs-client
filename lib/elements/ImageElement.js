import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";
import { Resource } from "../Resource.js";

/** Represents an image element. 
 * This class can be used to place images on a page.
*/
export class ImageElement extends Element {

    #resource;

    _ResourceName;

    /** Gets or sets the horizontal scale of the image. */
    ScaleX;

    /** Gets or sets the vertical scale of the image. */
    ScaleY;

    /** Gets or sets the maximum height of the image. */
    MaxHeight;

    /** Gets or sets the maximum width of the image.  */
    MaxWidth;

    /**
     * *Initializes a new instance of the `ImageElement` class.     * 
     * @param {string | Resource} resource The name of the image resource. | object containing the image resource.
     * @param {ElementPlacement} placement The placement of the image on the page.
     * @param {number} xOffset X coordinate of the image.
     * @param {number} yOffset Y coordinate of the image.
     */
    constructor(resource, placement, xOffset, yOffset) {
        super(resource, placement, xOffset, yOffset);
        if (typeof (resource) === 'string') {
            this._ResourceName = resource;
        }
        else {
            this.Resource = resource;
            this._ResourceName = this.Resource.resourceName;
        }
        this.XOffset = xOffset;
        this.YOffset = yOffset;
        this._Type = ElementType.Image;
    }

    get Resource() {
        return this.#resource;
    }

    set Resource(value) {
        this.#resource = value;
    }

    toJSON() {
        return {
            resourceName: this._ResourceName,
            scaleX: this.ScaleX,
            scaleY: this.ScaleY,
            maxHeight: this.MaxHeight,
            maxWidth: this.MaxWidth,
            type: this._Type,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement:this.Placement
        };
    }
}