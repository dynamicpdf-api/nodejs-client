import { BarcodeElement } from "./BarcodeElement.js";
import { Font } from "../Font.js";

/** Base class from which barcode page elements that display text are derived. */
export class TextBarcodeElement extends BarcodeElement {

    #fontName;

    #resource;

    #textColorName;

    #textColor;

    #font;

    /** Gets or sets the font size to use when displaying the text. */
    FontSize;

    /** Gets or sets a value indicating if the value should be placed as text below the barcode. */
    ShowText;

    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
    get TextFont() {
        return this.#font;
    }

    /** Gets the color of the text. */
    get TextColor() {
        return this.#textColorName;
    }

    /**Sets the color of the text. */
    set TextColor(value) {
        this.#textColor = value;
        this.#textColorName = this.#textColor.ColorString;
    }

    /** Gets  the font to use when displaying the text. */
    get Font() {
        return this.#font;
    }

    /** sets the font to use when displaying the text. */
    set Font(value) {
        this.#font = value;
        this.#fontName = this.#font.Name;
        this.#resource = this.#font.#resource;
    }

    toJSON() {
        return {
            textColor: this.#textColorName,
            expandedStackedSegmentCount: this.ExpandedStackedSegmentCount,
            font: this.#fontName,
            showText: this.ShowText,
            fontSize: this.FontSize,
            xOffset: this.XOffset,
            yOffset: this.YOffset,
            placement: this.Placement
        };
    }
}