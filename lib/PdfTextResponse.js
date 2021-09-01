import { JsonResponse } from './JsonResponse.js'

/**
 * Represents the pdf text response.
 */
export class PdfTextResponse extends JsonResponse {

    /** Gets the collection of PdfContent. */
    Content = [];

    /**
     * Initializes a new instance of the `PdfResponse` class.
     * @param {string} jsonContent The json content
     */
    constructor(jsonContent) {
        super(jsonContent);
        this.Content = JSON.parse(this.JsonContent);
    }
}
