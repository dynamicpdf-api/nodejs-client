import { InputType } from "./InputType.js";
import { Input } from "./Input.js";

/** Represents a page input. */
export class PageInput extends Input {

    /**
     * Initializes a new instance of the `PageInput` class. 
     * @param {number} pageWidth The width of the page.
     * @param {number} pageHeight The height of the page.
     */
    constructor(pageWidth, pageHeight) {
        super();
        this.PageWidth = pageWidth;
        this.PageHeight = pageHeight;

        super.Type = InputType.Page;
    }

    /** Gets or sets the height of the page. */
    PageHeight;

    /** Gets or sets the width of the page. */
    PageWidth;


    /** Gets or sets the elements of the page. */
    Elements = [];
}