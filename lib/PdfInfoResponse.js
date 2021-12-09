import { JsonResponse } from './JsonResponse.js'

/**
 * Represents the pdf information response.
 */
export class PdfInfoResponse extends JsonResponse {

    /** Gets the pdf information content. */
    content = [];

    /**
     * Initializes a new instance of the `PdfInfoResponse` class.
     * @param {string} jsonContent The json of pdf information.
     */
    constructor(jsonContent) {
        super(jsonContent);
        this.content = JSON.parse(this.jsonContent);
    }
}
