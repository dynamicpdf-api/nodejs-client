import { ElementPlacement } from "./ElementPlacement.js";

/** Base class from which all page elements are derived. */
export class Element {

    #TextFont;

    #resource;

    Type;
    
    InputValue;   

    /** Gets and sets placement of the page element on the page. */
    Placement;

    /**Gets or sets the X coordinate of the page element. */
    XOffset;

    /** Gets or sets the Y coordinate of the page element. */
    YOffset;

    /** Gets or sets the boolean value specifying whether the element should be added to even pages or not. */
    EvenPages;

    /** Gets or sets the boolean value specifying whether the element should be added to odd pages or not. */
    OddPages;

    get Resource() {
        return this.#resource;
    }

    set Resource(value) {
        this.#resource = value;
    }

    

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
