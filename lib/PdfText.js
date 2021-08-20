import { Endpoint } from "./Endpoint.js";
import { PdfTextResponse } from "./PdfTextResponse.js";
export class PdfText extends Endpoint {
    EndpointName = "pdf-text";
    resource;
    StartPage;
    PageCount;
    constructor(resource, startPage = 1, pageCount = 0) {
        super();
        this.resource = resource;
        this.StartPage = startPage;
        this.PageCount = pageCount;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.EndpointName + '/?StartPage=' + this.StartPage + '&PageCount=' + this.PageCount);
        return await this.postHttpRequest(url, this.resource.Data,'application/pdf', PdfTextResponse);
    }
};