import FormData from 'form-data';
import { Endpoint } from "./Endpoint.js";
import { LayoutDataResource } from './LayoutDataResource.js';
import { AdditionalResource } from './AdditionalResource.js';
import { resourceType } from "./ResourceType.js"; 
import { additionalResourceType } from "./AdditionalResourceType.js"; 
/**
 * Represents a Dlex layout endpoint.
 */
export class DlexLayout extends Endpoint {

    resource;

    #form;

    _Resources = [];

    /** Gets or sets the DLEX file path present in the resource manager. */
    dlexPath;

    /**
     * Initializes a new instance of the < see cref="DlexLayout"/> class using the 
       DLEX file path present in the cloud environment and the JSON data for the PDF report.
     * @param {string} cloudDlexPath The DLEX file path present in the resource manager
     * @param {LayoutDataResource} layoutData The `LayoutDataResource` json data file used to create the PDF report.
     * @param {DlexResource} dlexResource The DLEX file and the JSON data file from the client to the API to create the PDF report.*/
   
    constructor(dlex, layoutData) {
        super();
        super.endPointName = "dlex-layout";
        if (typeof (dlex) === "string" && typeof (layoutData) !== "string") {
            this.dlexPath = dlex;
            this.resource = layoutData;
        }
        else if (typeof (dlex) !== "string" && typeof (layoutData) !== "string") {
            this._Resources.push(dlex);
            this.resource = layoutData;
        }
    }

    dlexAdditionalResource(resourcePath, resourceName)
    {    
        let addResource = new AdditionalResource(resourcePath,resourceName);
        if(addResource.Type == resourceType.layoutData)
            throw "Layout data resources cannot be added to a DlexLayout object.";
        else if(addResource.Type == resourceType.dlex) 
            throw "Dlex resources cannot be added to a DlexLayout object.";
        else
            this._Resources.push(addResource);
    }

    dlexAdditionalResourceWithBytes(resourceData, additionResourceType, resourceName) {
        let type = resourceType.Pdf; 
    
        switch (additionResourceType) {
            case 'Font':
                type = additionalResourceType.Font;
                break;
            case 'Image':
                type = additionalResourceType.Image;
                break;
            case 'Pdf':
                type = additionalResourceType.Pdf;
                break;
            default:
                throw "This type of resource not allowed";
        }
    
        var resource = new AdditionalResource(resourceData, resourceName, type);
        this._Resources.push(resource);
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
        if(this._Resources != null && this._Resources.length > 0)
        {
            this._Resources.forEach(resource => {  this.#form.append("Resource", resource.data , resource.resourceName, resource.mimeType);
            });
        }
        return await this._postForm(this.#form, super.endPointName);
    }
    toJSON() {
        return {
            dlexPath: this.dlexPath,
            resourceName: this.resource.resourceName
        };
    }
}