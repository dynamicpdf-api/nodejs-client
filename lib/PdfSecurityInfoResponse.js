import { JsonResponse } from './JsonResponse.js'
import { PdfSecurityInfo } from './PdfSecurityInfo.js';

/**
 * Represents the pdf security info response.
 */
export class PdfSecurityInfoResponse extends JsonResponse {

    /** Gets the collection of Pdf Security Information Content. */
    content = [];

    /**
     * Initializes a new instance of the `PdfSecurityInfoResponse` class.
     * @param {string} jsonContent The json content
     */
    constructor(jsonContent) {
        super(jsonContent);
        this.content = null;

        if (jsonContent) {
            try {
                const data = JSON.parse(jsonContent);
                this.content = new PdfSecurityInfo(data);
            } catch (error) {
                console.error("Error parsing PdfSecurityInfo:", error);
            }
        }
    }
}
