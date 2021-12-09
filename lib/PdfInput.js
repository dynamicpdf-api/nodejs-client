import { inputType } from "./InputType.js";
import { Input } from "./Input.js";

/**
 * Represents a pdf input.
 */
export class PdfInput extends Input {

    /**Gets or sets the merge options `MergeOptions` */
    mergeOptions;

    /**Gets or sets the start page. */
    startPage;

    /** Gets or sets the page count.*/
    pageCount;

    /**
     * Initializes a new instance of the `PdfInput` class.
     * @param { PdfResource | string } resource The resource of type `PdfResource`. | The resource path in cloud resource manager.
     * @param {MergeOptions} mergeOptions The merge options for the pdf.
     */
    constructor(resource, mergeOptions = null) {
        super(resource);
        if (mergeOptions != null)
            this.mergeOptions = mergeOptions;
        this._Type = inputType.pdf;
    }
    toJSON() {
        return {
            mergeOptions: this.mergeOptions,
            startPage: this.startPage,
            pageCount: this.pageCount,
            type: this._Type,
            resourceName: this.resourceName,
            templateId: this._templateId,
            id: this.id
        };
    }
}