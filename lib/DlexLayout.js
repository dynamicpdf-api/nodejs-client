import FormData from 'form-data';
import { Endpoint } from "./Endpoint.js";
import { LayoutDataResource } from './LayoutDataResource.js';

/**
 * Represents a Dlex layout endpoint.
 */
export class DlexLayout extends Endpoint {

    resource;

    #form;

    /** Gets or sets the DLEX file path present in the resource manager. */
    DlexPath;

    /**
     * Initializes a new instance of the <see cref="DlexLayout"/> class using the 
       DLEX file path present in the cloud environment and the JSON data for the PDF report.
     * @param {string} cloudDlexPath The DLEX file path present in the resource manager
     * @param {LayoutDataResource} layoutData The `LayoutDataResource` json data file used to create the PDF report.
     */
    constructor(cloudDlexPath, layoutData) {
        super();
        this.DlexPath = cloudDlexPath;
        this.resource = layoutData;
        super.EndPointName = "dlex-layout";

    }

    /**
     * Process the DLEX and layout data to create PDF report.
     * @returns PdfResponse. 
     */
    async Process() {
        this.#form = new FormData();

        if (this.resource != null)
            this.#form.append('LayoutData', this.resource.Data, this.resource.resourceName, this.resource.MimeType);
        if (this.DlexPath != null)
            this.#form.append('DlexPath', this.DlexPath);
        return await this.postForm(this.#form, super.EndPointName);
    }
    toJSON() {
        return {
            dlexPath: this.DlexPath,
            resourceName: this.resource.resourceName
        };
    }
}