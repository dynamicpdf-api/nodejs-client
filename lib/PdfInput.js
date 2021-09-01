import { InputType } from "./InputType.js";
import { Input } from "./Input.js";

/**
 * Represents a pdf input.
 */
export class PdfInput extends Input {

    /**Gets or sets the merge options `MergeOptions` */
    MergeOptions;

    /**Gets or sets the start page. */
    StartPage;

    /** Gets or sets the page count.*/
    PageCount;

    /**
     * Initializes a new instance of the `PdfInput` class.
     * @param { PdfResource | string } resource The resource of type `PdfResource`. | The resource path in cloud resource manager.
     * @param {MergeOptions} mergeOptions The merge options for the pdf.
     */
    constructor(resource, mergeOptions = null) {
        super(resource);
        this.MergeOptions = mergeOptions;
        super.Type = InputType.Pdf;
    }
}