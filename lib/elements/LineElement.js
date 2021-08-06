import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";

export class LineElement extends Element {
    #colorDetail;
    X1Offset;
    X2offset;
    Y1Offset;
    Y2Offset;
    Width;
    #lineStyleDetails;
    Type = ElementType.Line;
    color;
    lineStyle;
    constructor(placement, x2Offset, y2Offset) {
        super(null, placement, x2Offset, y2Offset)
        this.Placement = placement;
        this.X2offset = x2Offset;
        this.Y2Offset = y2Offset;
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