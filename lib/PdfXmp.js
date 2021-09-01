import { Endpoint } from "./Endpoint.js";
import { PdfResource } from "./PdfResource.js";
import { XmlResponse } from "./XmlResponse.js";

/**
 * Represents the pdf xmp endpoint.
 */
export class PdfXmp extends Endpoint {

    #EndpointName = "pdf-xmp";
    #resource;

    /**
     * Initializes a new instance of the `PdfXmp` class.
     * @param {PdfResource} resource The image resource of type `PdfResource`.
     */
    constructor(resource) {
        super();
        this.#resource = resource;
    }

    /** Process the pdf resource to get pdf's xmp data. */
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.#resource.Data, 'application/pdf', XmlResponse);
    }
};