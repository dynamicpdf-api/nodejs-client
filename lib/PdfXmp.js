import { Endpoint } from "./Endpoint.js";
import { XmlResponse } from "./XmlResponse.js";
export class PdfXmp extends Endpoint {
    #EndpointName = "pdf-xmp";
    #resource;
    constructor(resource) {
        super();
        this.#resource = resource;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.#resource.Data,'application/pdf',XmlResponse);
    }
};