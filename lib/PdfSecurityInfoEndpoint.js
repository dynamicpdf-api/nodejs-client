import { Endpoint } from './Endpoint.js';
import { PdfSecurityInfoResponse } from './PdfSecurityInfoResponse.js';

/**
 * Represents the pdf security info endpoint. 
 */
export class PdfSecurityInfoEndpoint extends Endpoint {

    #resource;

    /**
     * Initializes a new instance of the `PdfSecurityInfoEndpoint` class.
     * @param {Resource} resource The resource of type `PdfResource`
     */
    constructor(resource) {
        super();
        this.#resource = resource;
        this.endPointName = "pdf-security-info";
    }

    /**
     * Process the pdf resource to get pdf's security information.
     * @returns A Promise of PdfSecurityInfo response
     */
    async process() {
        let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + this.endPointName : this.baseUrl + "/v1.0/" + this.endPointName;
        let url = new URL(endpointUrl);
        return await this._postHttpRequest(url, this.#resource.data, 'application/pdf', PdfSecurityInfoResponse);
    }
}