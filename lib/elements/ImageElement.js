import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
export class ImageElement extends Element {
    Type = ElementType.Image;
    Resource;
    ResourceName;
    ScaleX;
    ScaleY;
    MaxHeight;
    MaxWidth;
    constructor(resource, placement, xOffset = 0, yOffset = 0) {
        super(resource, placement, xOffset, yOffset);
        this.Resource = resource;
        if (typeof (resource) !== 'string') {
            this.ResourceName = resource.resourceName;
        }
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

}