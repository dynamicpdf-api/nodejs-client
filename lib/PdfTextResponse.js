import { JsonResponse } from './JsonResponse.js'

/**
 * Represents the pdf text response.
 */
export class PdfTextResponse extends JsonResponse {

    /** Gets the collection of PdfContent. */
    content = [];

    /**
     * Initializes a new instance of the `PdfResponse` class.
     * @param {string} jsonContent The json content
     */
    constructor(jsonContent) {
        super(jsonContent);
        this.content = JSON.parse(this.jsonContent);
    }
}
