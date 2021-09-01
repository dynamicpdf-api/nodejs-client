import { Response } from './Response.js';

/**
 * Represents the pdf response.
 */
export class PdfResponse extends Response {

    /**
     * Initializes a new instance of the `PdfResponse` class.
     * @param {Buffer[]} pdfContent The byte array of pdf content.
     */
    constructor(pdfContent) {
        super();
        this.Content = pdfContent;
    }

    /**Gets the content of pdf. */
    Content = [];
}
