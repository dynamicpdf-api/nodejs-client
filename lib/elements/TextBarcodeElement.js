import { BarcodeElement } from "./BarcodeElement.js";
import { Font } from "../Font.js";

/** Base class from which barcode page elements that display text are derived. */
export class TextBarcodeElement extends BarcodeElement {

    #fontDetails;

    #resource;
    #textColorDetail;
    textColor;
    font;

    /** Gets or sets the font size to use when displaying the text. */
    FontSize;

    /** Gets or sets a value indicating if the value should be placed as text below the barcode. */
    ShowText;

    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
    get TextFont() {
        return this.Font;
    }

    /** Gets the color of the text. */
    get TextColor() {
        return this.#textColorDetail;
    }

    /**Sets the color of the text. */
    set TextColor(value) {
        this.#textColorDetail = value;
        this.textColor = this.#textColorDetail.ColorString;
    }

    /** Gets  the font to use when displaying the text. */
    get Font() {
        return this.#fontDetails;
    }

    /** sets the font to use when displaying the text. */
    set Font(value) {
        this.#fontDetails = value;
        this.font = this.#fontDetails.Name;
        this.#resource = this.#fontDetails.#resource;
    }
}