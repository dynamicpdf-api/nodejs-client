import { Resource } from './Resource.js';
import { ResourceType } from './ResourceType.js';

/**
 * Represents a pdf resource.
 */
export class PdfResource extends Resource {

    #fileExtension = ".pdf";

    /**
     * Initializes a new instance of the `PdfResource` class.
     * @param {string | Buffer[]} input The pdf file path. | The byte array of the pdf file.
     * @param {string} resourceName The name of the resource.
     */
    constructor(pdf, resourceName) {
        super(pdf, resourceName);
        if (resourceName == undefined)
            this.#addFileExtension();
        super.Type = ResourceType.Pdf;
        super.MimeType = "application/pdf";
    }
    
    #addFileExtension() {
        if (super.FileExtension == undefined)
            this.resourceName = this.resourceName + this.#fileExtension;
    }

}
