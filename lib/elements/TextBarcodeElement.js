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
    fontSize;

    /** Gets or sets a value indicating if the value should be placed as text below the barcode. */
    showText;

    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
    get textFont() {
        return this.#font;
    }

    /** Gets the color of the text. */
    get textColor() {
        return this.#textColor;
    }

    /**Sets the color of the text. */
    set textColor(value) {
        this.#textColor = value;
        this.#textColorName = this.#textColor.colorString;
    }

    /** Gets  the font to use when displaying the text. */
    get font() {
        return this.#font;
    }

    /** sets the font to use when displaying the text. */
    set font(value) {
        this.#font = value;
        this.#fontName = this.#font.name;
        this.#resource = this.#font.#resource;
    }

    toJSON() {
        return {
            textColor: this.#textColorName,
            expandedStackedSegmentCount: this.ExpandedStackedSegmentCount,
            font: this.#fontName,
            showText: this.showText,
            fontSize: this.fontSize,
            xOffset: this.xOffset,
            yOffset: this.yOffset,
            placement: this.placement,
            color:this._ColorName
        };
    }
}