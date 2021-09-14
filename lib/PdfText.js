import { Endpoint } from "./Endpoint.js";
import { PdfResource } from "./PdfResource.js";
import { PdfTextResponse } from "./PdfTextResponse.js";

/** Represents the pdf text endpoint.*/
export class PdfText extends Endpoint {

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
        this.EndPointName = "pdf-text";
    }

    /** Process the pdf resource to get pdf's text. */
    async Process() {
        let endpointUrl = this.BaseUrl.endsWith("/") ? this.BaseUrl + this.EndPointName : this.BaseUrl + "/" + this.EndPointName;
        let url = new URL(endpointUrl + '/?StartPage=' + this.StartPage + '&PageCount=' + this.PageCount);
        return await this.postHttpRequest(url, this.#resource.Data, 'application/pdf', PdfTextResponse);
    }
};