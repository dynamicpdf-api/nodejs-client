import { Action } from "./Action.js";
import { Input } from "./Input.js";
import { pageZoom } from "./PageZoom.js";

/**
 * Represents a goto action in a PDF document that navigates to a specific page using page number and zoom options.
 */
export class GoToAction extends Action {

    #Input;

    inputID;

    /** Gets or sets page Offset. */
    pageOffset;

    /** Gets or sets `PageZoom` to display the destination. */
    pageZoom;

    /**
     * Initializes a new instance of the  `GoToAction` class 
     * using an input to create the PDF, page number, and a zoom option.
     * @param {Input} input Any of the `ImageInput`, `DlexInput`, `PdfInput` or `PageInput` objects to create PDF.
     * @param {Number} pgOffset Page number to navigate.
     * @param {pageZoom} pgZoom Page Zoom to display the destination. 
     */
    constructor(input, pgOffset = 0, pgZoom = pageZoom.fitPage) {
        super();
        this.#Input = input;
        this.inputID = input.id;
        this.pageOffset = pgOffset;
        this.pageZoom = pgZoom;
    }

    toJSON() {
        return {
            inputID: this.inputID,
            pageOffset: this.pageOffset,
            pageZoom: this.pageZoom
        };
    }
}