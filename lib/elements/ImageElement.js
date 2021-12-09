import { Element } from "./Element.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";
import { Resource } from "../Resource.js";

/** Represents an image element. 
 * This class can be used to place images on a page.
*/
export class ImageElement extends Element {

    #resource;

    _ResourceName;

    /** Gets or sets the horizontal scale of the image. */
    scaleX;

    /** Gets or sets the vertical scale of the image. */
    scaleY;

    /** Gets or sets the maximum height of the image. */
    maxHeight;

    /** Gets or sets the maximum width of the image.  */
    maxWidth;

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
            this.resource = resource;
            this._ResourceName = this.resource.resourceName;
        }
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this._Type = elementType.image;
    }

    get resource() {
        return this.#resource;
    }

    set resource(value) {
        this.#resource = value;
    }

    toJSON() {
        return {
            resourceName: this._ResourceName,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            maxHeight: this.maxHeight,
            maxWidth: this.maxWidth,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement:this.placement
        };
    }
}