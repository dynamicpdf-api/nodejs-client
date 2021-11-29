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
        this.EndPointName = "pdf-xmp";
    }

    /**  Process the pdf resource to get pdf's xmp data.
     * @returns A Promise of PdfTextResponse callback.
     */
    async Process() {
        let endpointUrl = this.BaseUrl.endsWith("/") ? this.BaseUrl + "v1.0/" + this.EndPointName : this.BaseUrl + "/v1.0/" + this.EndPointName;
        let url = new URL(endpointUrl);
        return await this._postHttpRequest(url, this.#resource.Data, 'application/pdf', XmlResponse);
    }
};