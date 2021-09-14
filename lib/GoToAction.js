import { Action } from "./Action.js";
import { Input } from "./Input.js";
import { PageZoom } from "./PageZoom.js";

/**
 * Represents a goto action in a PDF document that navigates to a specific page using page number and zoom options.
 */
export class GoToAction extends Action {

    #Input;

    InputID;

    /** Gets or sets page Offset. */
    PageOffset;

    /** Gets or sets `PageZoom` to display the destination. */
    PageZoom;

    /**
     * Initializes a new instance of the  `GoToAction` class 
     * using an input to create the PDF, page number, and a zoom option.
     * @param {Input} input Any of the `ImageInput`, `DlexInput`, `PdfInput` or `PageInput` objects to create PDF.
     * @param {Number} pageOffset Page number to navigate.
     * @param {pageZoom} pageZoom to display the destination. 
     */
    constructor(input, pageOffset = 0, pageZoom = PageZoom.FitPage) {
        super();
        this.#Input = input;
        this.InputID = input.Id;
        this.PageOffset = pageOffset;
        this.PageZoom = pageZoom;
    }
}