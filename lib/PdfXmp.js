import { Endpoint } from "./Endpoint.js";
import { PdfResource } from "./PdfResource.js";
import { XmlResponse } from "./XmlResponse.js";

/**
 * Represents the pdf xmp endpoint.
 */
export class PdfXmp extends Endpoint {

    #resource;

    /**
     * Initializes a new instance of the `PdfXmp` class.
     * @param {PdfResource} resource The image resource of type `PdfResource`.
     */
    constructor(resource) {
        super();
        this.#resource = resource;
        this.endPointName = "pdf-xmp";
    }

    /**  Process the pdf resource to get pdf's xmp data.
     * @returns A Promise of PdfTextResponse callback.
     */
    async process() {
        let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + this.endPointName : this.baseUrl + "/v1.0/" + this.endPointName;
        let url = new URL(endpointUrl);
        return await this._postHttpRequest(url, this.#resource.data, 'application/pdf', XmlResponse);
    }
};