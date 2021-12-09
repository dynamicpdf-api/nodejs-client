import { inputType } from "./InputType.js";
import { Input } from "./Input.js";

/** Represents a page input. */
export class PageInput extends Input {

    /** Gets or sets the height of the page. */
    pageHeight;

    /** Gets or sets the width of the page. */
    pageWidth;

    /** Gets or sets the elements of the page. */
    elements = [];

    /**
     * Initializes a new instance of the `PageInput` class. 
     * @param {number} pageWidth The width of the page.
     * @param {number} pageHeight The height of the page.
     */
    constructor(pageWidth, pageHeight) {
        super();
        this.pageWidth = pageWidth;
        this.pageHeight = pageHeight;
        this._Type = inputType.page;
    }
    toJSON() {
        return {
            pageHeight: this.pageHeight,
            pageWidth: this.pageWidth,
            elements: this.elements,
            type: this._Type,
            resourceName: this.resourceName,
            templateId: this._templateId,
            id: this.id
        };
    }
}