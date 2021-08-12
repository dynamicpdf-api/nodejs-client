import FormData from 'form-data';
import http from 'https';
import { Endpoint } from "./Endpoint.js";
import { PdfResponse } from './PdfResponse.js';
export class DlexLayout extends Endpoint {
    EndpointName = "dlex-layout";
    DlexPath;
    resource;
    DlexPath;
    #form;
    response;
    constructor(cloudDlexPath, layoutData) {
        super();
        this.DlexPath = cloudDlexPath;
        this.resource = layoutData;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        this.#form = new FormData();

        if (this.resource != null)
            this.#form.append('LayoutData', this.resource.Data, this.resource.resourceName, this.resource.MimeType);
        if (this.DlexPath != null)
            this.#form.append('DlexPath', this.DlexPath);

        return await this.postHttpRequest(this.#form);       
       
    }
}