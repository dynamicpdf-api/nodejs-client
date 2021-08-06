import { ElementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";
export class TextElement extends Element {
    xOffSet;
    yOffset;
    color;
    #colorDetail;
    FontSize;
    Type = ElementType.Text;
    font;
    #fontDetails;
    ColorName;
    Text = this.InputValue;
    constructor(value, placement, xOffSet, yOffset) {
        super(value, placement, xOffSet, yOffset);
    }
    get Text() {
        return this.InputValue;
    }
    set Text(value) {
        this.InputValue = value;
    }
    get Font() {
        return this.#fontDetails;
    }
    set Font(value) {
        this.#fontDetails = value;
        this.font = this.#fontDetails.Name;
        this.Resource = this.#fontDetails.Resource;
    }
    get Color() {
        return this.#colorDetail;
    }
    set Color(value) {
        this.#colorDetail = value;
        this.color = this.#colorDetail.ColorString;
    }
    get TextFont() {
        return this.#fontDetails;
    }
}