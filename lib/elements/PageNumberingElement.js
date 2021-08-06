import { ElementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";
import { InputType } from "../InputType.js";
export class PageNumberingElement extends Element {
    value;
    font;
    Type = ElementType.PageNumbering;
    Resource;
    Font;
    Color;
    FontSize;
    FontName;
    #ColorName;
    constructor(text, placement, xOffset = 0, yOffset = 0) {
        super(text, placement, xOffset, yOffset);
    }
    get Font() {
        return this.font;
    }
    set Font(value) {
        this.font = value;
        this.FontName = this.font.Name;
        this.Resource = this.font.Resource;
    }
    Text = this.InputValue;
    get TextFont() {
        return this.font;
    }
    get Color() {
        return this.Color;
    }
    set Color(value) {
        this.color = value;
        this.#ColorName = this.color.ColorString;
    }
}