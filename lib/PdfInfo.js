import { Endpoint } from './Endpoint.js';
import { PdfInfoResponse } from './PdfInfoResponse.js';
export class PdfInfo extends Endpoint {
    #resource;
    constructor(resource) {
        super();
        this.#resource = resource;
    }
    #EndpointName = "pdf-info";
    StartPage;
    PageCount;
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.#resource.Data,'application/pdf',PdfInfoResponse);
    }
}