import { elementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";
import { inputType } from "../InputType.js";
import { elementPlacement } from "./ElementPlacement.js";

/**
 * Represents a page numbering label page element.
 */
export class PageNumberingElement extends Element {

    #ColorName;

    #font;

    /** Gets or sets the font size for the text of the label. */
    fontSize;
    /** Gets the `Font` object to use for the text of the label. */
    get font() {
        return this.#font;
    }

    /** sets the `Font` object to use for the text of the label. */
    set font(value) {
        this.#font = value;
        this.FontName = this.#font.Name;
        this.resource = this.#font.resource;
    }

    /**Gets or sets the text to display in the label. */
    get text() {
        return this._InputValue;
    }
    set text(value) {
        this._InputValue = value;
    }

    get textFont() {
        return this.#font;
    }

    /**Gets `Color` object to use for the text of the label. */
    get color() {
        return this.color;
    }

    /**sets `Color` object to use for the text of the label. */
    set color(value) {
        super.color = value;
        this.#ColorName = this.color.colorString;
    }

    /**
     * Initializes a new instance of the `PageNumberingElement` class.
     * @param {string} text Text to display in the label.
     * @param {ElementPlacement} placement The placement of the page numbering element on the page.
     * @param {number} xOffset X coordinate of the label.
     * @param {number} yOffset Y coordinate of the label.
     */
    constructor(text, placement, xOffset = 0, yOffset = 0) {
        super(text, placement, xOffset, yOffset);
        this._Type = elementType.pageNumbering;
    }

    toJSON() {
        var obj = {
            color: this.#ColorName,
            font: this.FontName,
            text: this.text,
            fontSize: this.fontSize,
            type: this._Type,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement
        };

        if(this.textFont != null) obj["font"] = this.textFont.name;

        return obj;
    }
}