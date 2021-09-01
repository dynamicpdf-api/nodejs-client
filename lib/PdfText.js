import { Endpoint } from "./Endpoint.js";
import { PdfResource } from "./PdfResource.js";
import { PdfTextResponse } from "./PdfTextResponse.js";

/** Represents the pdf text endpoint.*/
export class PdfText extends Endpoint {

    #EndpointName = "pdf-text";
    #resource;

    /** Gets or sets the start page. */
    StartPage;

    /** Gets or sets the page count. */
    PageCount;

    /**
     * Initializes a new instance of the `PdfText` class.
     * @param { PdfResource } resource The image resource of type `PdfResource`.`
     * @param { number } startPage The start page.
     * @param { number } pageCount The page count.
     */
    constructor(resource, startPage = 1, pageCount = 0) {
        super();
        this.#resource = resource;
        this.StartPage = startPage;
        this.PageCount = pageCount;
    }

    /** Process the pdf resource to get pdf's text. */
    async Process() {
        return await this.ProcessAsync();
    }
    
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName + '/?StartPage=' + this.StartPage + '&PageCount=' + this.PageCount);
        return await this.postHttpRequest(url, this.#resource.Data, 'application/pdf', PdfTextResponse);
    }
};