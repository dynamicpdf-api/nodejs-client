import { ElementPlacement } from "./ElementPlacement.js";
export class Element {
    Type;
    Placement;
    XOffset;
    YOffset;
    #TextFont;
    InputValue;
    Resource = null;
    EvenPages;
    OddPages;
    constructor(value, placement, xOffset, yOffset) {
        if (placement == null || placement == undefined) {
            this.placement = ElementPlacement.TopLeft;
        }
        this.InputValue = value;
        this.Placement = placement;
        this.XOffset = xOffset;
        this.YOffset = yOffset;
    }
}
