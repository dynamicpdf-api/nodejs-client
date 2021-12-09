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
    dlexPath;

    /**
     * Initializes a new instance of the <see cref="DlexLayout"/> class using the 
       DLEX file path present in the cloud environment and the JSON data for the PDF report.
     * @param {string} cloudDlexPath The DLEX file path present in the resource manager
     * @param {LayoutDataResource} layoutData The `LayoutDataResource` json data file used to create the PDF report.
     */
    constructor(cloudDlexPath, layoutData) {
        super();
        this.dlexPath = cloudDlexPath;
        this.resource = layoutData;
        super.endPointName = "dlex-layout";

    }

    /**
     * Process the DLEX and layout data to create PDF report.
     * @returns A Promise of DlexResponse callback.
     */
    async process() {
        this.#form = new FormData();

        if (this.resource != null)
            this.#form.append('LayoutData', this.resource.data, this.resource.resourceName, this.resource.mimeType);
        if (this.dlexPath != null)
            this.#form.append('DlexPath', this.dlexPath);
        return await this._postForm(this.#form, super.endPointName);
    }
    toJSON() {
        return {
            dlexPath: this.dlexPath,
            resourceName: this.resource.resourceName
        };
    }
}