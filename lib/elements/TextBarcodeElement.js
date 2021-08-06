import { BarcodeElement } from "./BarcodeElement.js";
import { Font } from "../Font.js";
export class TextBarcodeElement extends BarcodeElement {
    #fontDetails;
    FontName;
    Resource;
    #textColorDetail;
    textColor;
    font;
    FontSize;
    ShowText;
    constructor(value, placement, xOffset, yOffset) {
        super(value, placement, xOffset, yOffset);
    }
    get TextFont() {
        return this.Font;
    }
    get TextColor() {
        return this.#textColorDetail;
    }
    set TextColor(value) {
        this.#textColorDetail = value;
        this.textColor = this.#textColorDetail.ColorString;
    }
    get Font() {
        return this.#fontDetails;
    }
    set Font(value) {
        this.#fontDetails = value;
        this.font = this.#fontDetails.Name;
        this.Resource = this.#fontDetails.Resource;
    }
}