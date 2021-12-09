import { elementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";

/**
 * Represents a text element.
 * This class can be used to place text on a page.
 */
export class TextElement extends Element {

    #color;

    #font;

    #fontName;

    #ColorName;

    /** Gets or sets the font size for the text of the text element. */
    fontSize;

    _Type = elementType.text;

    constructor(value, placement, xOffSet, yOffSet) {
        super(value, placement, xOffSet, yOffSet);
    }
    text = this._InputValue;

    /** Gets the `Font` object used to specify the font of the text for the text element. */
    get font() {
        return this.#font;
    }

    /** sets the `Font` object used to specify the font of the text for the text element. */
    set font(value) {
        this.#font = value;
        this.#fontName = this.#font.name;
        this.resource = this.#font.resource;
    }

    /** Gets `Color` object to use for the text of the text element. */
    get color() {
        return this.#color;
    }

    /**sets `Color` object to use for the text of the text element. */
    set color(value) {
        this.#color = value;
        this.#ColorName = this.#color.colorString;
    }

    get textFont() {
        return this.#font;
    }

    toJSON() {
        return {
            type: this._Type,
            color: this.#ColorName,
            font: this.#fontName,
            fontSize: this.fontSize,
            text: this.text,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement
        };
    }
}