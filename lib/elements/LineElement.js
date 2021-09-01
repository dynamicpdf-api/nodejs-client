import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/**
 * Represents a line page element.
 * This class can be used to place lines of different length, width, color and patterns on a page.
 */
export class LineElement extends Element {

    #colorDetail;

    /** Gets or sets the X2 coordinate of the line. */
    X2Offset;

    /**Gets or sets the Y2 coordinate of the line. */
    Y2Offset;

    /** Gets or sets the width of the line. */
    Width;
    #lineStyleDetails;

    color;
    lineStyle;

    /**
     * Initializes a new instance of the `LineElement` class.
     * @param {ElementPlacement} placement The placement of the line on the page.
     * @param {number} x2Offset X2 coordinate of the line.
     * @param {number} y2Offset Y2 coordinate of the line.
     */
    constructor(placement, x2Offset, y2Offset) {
        super(null, placement, x2Offset, y2Offset)
        this.Placement = placement;
        this.X2offset = x2Offset;
        this.Y2Offset = y2Offset;
        super.Type = ElementType.Line;
    }
    
    get LineStyle() {
        return this.#lineStyleDetails;
    }

    set LineStyle(value) {
        this.#lineStyleDetails = value;
        this.lineStyle = this.#lineStyleDetails.LineStyleString;
    }

    get Color() {
        return this.#colorDetail;
    }

    set Color(value) {
        this.#colorDetail = value;
        this.color = this.#colorDetail.ColorString;
    }
}