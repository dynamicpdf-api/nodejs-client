import { ElementType } from "./ElementType.js";
import { Element } from "./Element.js";
import { Font } from "../Font.js";

/**
 * Represents a text element.
 * This class can be used to place text on a page.
 */
export class TextElement extends Element {

    #colorDetail;

    #fontDetails;

    xOffSet;

    yOffset;

    color;

    font;
    
    ColorName;

    /** Gets or sets the font size for the text of the text element. */
    FontSize;

    Type = ElementType.Text;
    
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

    /** Gets the `Font` object used to specify the font of the text for the text element. */
    get Font() {
        return this.#fontDetails;
    }

    /** sets the `Font` object used to specify the font of the text for the text element. */
    set Font(value) {
        this.#fontDetails = value;
        this.font = this.#fontDetails.Name;
        this.Resource = this.#fontDetails.Resource;
    }

    /** Gets `Color` object to use for the text of the text element. */
    get Color() {
        return this.#colorDetail;
    }

    /**sets `Color` object to use for the text of the text element. */
    set Color(value) {
        this.#colorDetail = value;
        this.color = this.#colorDetail.ColorString;
    }

    get TextFont() {
        return this.#fontDetails;
    }
}