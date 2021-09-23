import { ElementPlacement } from "./ElementPlacement.js";

/** Base class from which all page elements are derived. */
export class Element {

    #resource;

    _TextFont;

    _Type;

    _InputValue;

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
            this.Placement = ElementPlacement.TopLeft;
        }
        this._InputValue = value;
        this.Placement = placement;
        this.XOffset = xOffset;
        this.YOffset = yOffset;
    }

    toJSON() {
        return {
            type: this._Type,
            placement: this.Placement,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            color:this.color,
            evenPages: this.EvenPages,
            oddPages: this.OddPages,
            inputValue: this._InputValue
        };
    }
}
