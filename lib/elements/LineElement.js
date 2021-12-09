import { Element } from "./Element.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";

/**
 * Represents a line page element.
 * This class can be used to place lines of different length, width, color and patterns on a page.
 */
export class LineElement extends Element {

    #color;

    #colorName;

    #lineStyleName;

    #lineStyle;

    /** Gets or sets the X2 coordinate of the line. */
    x2Offset;

    /**Gets or sets the Y2 coordinate of the line. */
    y2Offset;

    /** Gets or sets the width of the line. */
    width;

    /**
     * Initializes a new instance of the `LineElement` class.
     * @param {ElementPlacement} placement The placement of the line on the page.
     * @param {number} x2Offset X2 coordinate of the line.
     * @param {number} y2Offset Y2 coordinate of the line.
     */
    constructor(placement, x2Offset, y2Offset) {
        super(null, placement, x2Offset, y2Offset)
        this.placement = placement;
        this.x2offset = x2Offset;
        this.y2Offset = y2Offset;
        this._Type = elementType.line;
    }

    get lineStyle() {
        return this.#lineStyle;
    }
    

    set lineStyle(value) {
        this.#lineStyle = value;
        this.#lineStyleName = this.#lineStyle.lineStyleString;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
        this.#colorName = this.#color.colorString;
    }

    toJSON() {
        return {
            color: this.#colorName,
            lineStyle: this.#lineStyleName,
            width: this.width,
            x2Offset: this.x2Offset,
            y2Offset: this.y2Offset,
            type: this._Type,
            placement:this.placement
        };
    }
}