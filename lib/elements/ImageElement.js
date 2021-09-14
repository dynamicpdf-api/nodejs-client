import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";
import { Resource } from "../Resource.js";

/** Represents an image element. 
 * This class can be used to place images on a page.
*/
export class ImageElement extends Element {

    #resource;

    ResourceName;

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
    constructor(resource, placement, xOffset = 0, yOffset = 0) {
        super(resource, placement, xOffset, yOffset);
        this.Resource = resource;
        if (typeof (resource) !== 'string') {
            this.ResourceName = resource.resourceName;
        }
        this.XOffset = xOffset;
        this.YOffset = yOffset;
        super.Type = ElementType.Image;
    }

    get Resource() {
        return this.#resource;
    }

    set Resource(value) {
        this.#resource = value;
    }

}