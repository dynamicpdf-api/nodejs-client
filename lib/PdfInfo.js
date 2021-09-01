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
    }

    #EndpointName = "pdf-info";

    /** Gets or sets the start page. */
    StartPage;

    /** Gets or sets the page count. */
    PageCount;

    /**
     * Process the pdf resource to get pdf's information.
     * @returns PdfInfo
     */
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.#resource.Data,'application/pdf',PdfInfoResponse);
    }
}