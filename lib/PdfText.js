import { Endpoint } from "./Endpoint.js";
import { PdfResource } from "./PdfResource.js";
import { PdfTextResponse } from "./PdfTextResponse.js";
import { TextOrder } from "./TextOrder.js";

/** Represents the pdf text endpoint.*/
export class PdfText extends Endpoint {

    #resource;

    /** Gets or sets the start page. */
    startPage;

    /** Gets or sets the page count. */
    pageCount;

    /**Gets or sets the text extraction order */
    textOrder;

    /**
     * Initializes a new instance of the `PdfText` class.
     * @param { PdfResource } resource The image resource of type `PdfResource`.`
     * @param { number } startPage The start page.
     * @param { number } pageCount The page count.
     * @param {testOrder} textOrder The text extraction order.
     */
    constructor(resource, startPage = 1, pageCount = 0, textOrder = TextOrder.Stream) {
        super();
        this.#resource = resource;
        this.startPage = startPage;
        this.pageCount = pageCount;
        this.textOrder = textOrder;
        this.endPointName = "pdf-text";
    }

    /**Process the pdf resource to get pdf's text.  
     * @returns A Promise of PdfTextResponse callback.
     */
    async process() {
        let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + this.endPointName : this.baseUrl + "/v1.0/" + this.endPointName;
        let url = new URL(endpointUrl + '/?StartPage=' + this.startPage + '&PageCount=' + this.pageCount+'&TextOrder=' + this.textOrder);
        return await this._postHttpRequest(url, this.#resource.data, 'application/pdf', PdfTextResponse);
    }
};