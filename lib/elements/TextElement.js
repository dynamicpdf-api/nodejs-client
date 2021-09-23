import { ElementType } from "./ElementType.js";
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
    FontSize;

    _Type = ElementType.Text;

    constructor(value, placement, xOffSet, yOffSet) {
        super(value, placement, xOffSet, yOffSet);
    }
    Text = this._InputValue;

    /** Gets the `Font` object used to specify the font of the text for the text element. */
    get Font() {
        return this.#font;
    }

    /** sets the `Font` object used to specify the font of the text for the text element. */
    set Font(value) {
        this.#font = value;
        this.#fontName = this.#font.Name;
        this.Resource = this.#font.Resource;
    }

    /** Gets `Color` object to use for the text of the text element. */
    get Color() {
        return this.#color;
    }

    /**sets `Color` object to use for the text of the text element. */
    set Color(value) {
        this.#color = value;
        this.#ColorName = this.#color.ColorString;
    }

    get TextFont() {
        return this.#font;
    }

    toJSON() {
        return {
            type: this._Type,
            color: this.#ColorName,
            font: this.#fontName,
            fontSize: this.fontSize,
            text: this.Text,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement: this.Placement
        };
    }
}