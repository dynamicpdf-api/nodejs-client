import { elementPlacement } from "./ElementPlacement.js";

/** Base class from which all page elements are derived. */
export class Element {

    #resource;

    _TextFont;

    _Type;

    _InputValue;

    /** Gets and sets placement of the page element on the page. */
    #placement;

    /**Gets or sets the X coordinate of the page element. */
    xOffset;

    /** Gets or sets the Y coordinate of the page element. */
    yOffset;

    /** Gets or sets the boolean value specifying whether the element should be added to even pages or not. */
    evenPages;

    /** Gets or sets the boolean value specifying whether the element should be added to odd pages or not. */
    oddPages;

    get resource() {
        return this.#resource;
    }

    set resource(value) {
        this.#resource = value;
    }

    get placement() {
        if (this.#placement == null || this.#placement == undefined) {
            return elementPlacement.topLeft
        }
        else {
            return this.#placement
        }
    }
    set placement(value) {
        if (value != elementPlacement.topLeft) {
            this.#placement = value
        }
    }
    constructor(value, placement, xOffset, yOffset) {
        this._InputValue = value;
        this.#placement = placement;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
    }

    toJSON() {
        return {
            type: this._Type,
            placement: this.#placement,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            evenPages: this.evenPages,
            oddPages: this.oddPages,
            inputValue: this._InputValue
        };
    }
}
