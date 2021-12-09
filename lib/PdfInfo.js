import { Endpoint } from './Endpoint.js';
import { PdfInfoResponse } from './PdfInfoResponse.js';

/**
 * Represents the pdf info endpoint. 
 */
export class PdfInfo extends Endpoint {

    #resource;

    /**
     * Initializes a new instance of the `PdfInfo` class.
     * @param {Resource} resource The resource of type `PdfResource`
     */
    constructor(resource) {
        super();
        this.#resource = resource;
        this.endPointName = "pdf-info";
    }

    /** Gets or sets the start page. */
    startPage;

    /** Gets or sets the page count. */
    pageCount;

    /**
     * Process the pdf resource to get pdf's information.
     * @returns A Promise of PdfInfo response
     */
    async process() {
        let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + this.endPointName : this.baseUrl + "/v1.0/" + this.endPointName;
        let url = new URL(endpointUrl);
        return await this._postHttpRequest(url, this.#resource.data, 'application/pdf', PdfInfoResponse);
    }
}