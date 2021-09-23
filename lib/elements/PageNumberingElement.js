import { ElementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";
import { InputType } from "../InputType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/**
 * Represents a page numbering label page element.
 */
export class PageNumberingElement extends Element {

    #ColorName;

    #resource;

    #font;

    /** Gets or sets the font size for the text of the label. */
    FontSize;
    /** Gets the `Font` object to use for the text of the label. */
    get Font() {
        return this.#font;
    }

    /** sets the `Font` object to use for the text of the label. */
    set Font(value) {
        this.#font = value;
        this.FontName = this.#font.Name;
        this.#resource = this.#font.Resource;
    }

    /**Gets or sets the text to display in the label. */
    get Text() {
        return this._InputValue;
    }
    set Text(value) {
        this._InputValue = value;
    }

    get TextFont() {
        return this.#font;
    }

    /**Gets `Color` object to use for the text of the label. */
    get Color() {
        return this.color;
    }

    /**sets `Color` object to use for the text of the label. */
    set Color(value) {
        this.color = value;
        this.#ColorName = this.color.ColorString;
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
        this._Type = ElementType.PageNumbering;
    }

    toJSON() {
        return {
            color: this.#ColorName,
            font: this.FontName,
            text: this.Text,
            fontSize: this.FontSize,
            textFont: this.TextFont,
            type: this._Type,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement: this.Placement
        };
    }
}