import { DlexResource } from "./DlexResource.js";
import { Input } from "./Input.js";
import { InputType } from "./InputType.js";
import { LayoutDataResource } from "./LayoutDataResource.js";

/** Represents a Dlex input. */
export class DlexInput extends Input {

    /** Gets or sets the name for layout data resource. */
    LayoutDataResourceName;

    /**
     * Initializes a new instance of the `DlexInput` class by posting the 
     * DLEX file and the JSON data file or
     * DLEX file path that is present in the cloud environment and the JSON data file or
     * DLEX file path and DLEX data file path that is present in the cloud environment
     * from the client to the API to create the PDF report.    
     * @param {DlexResource|string} resource dlex file created as per the desired PDF report layout design. | The DLEX file path present in the resource manager.
     * @param {LayoutDataResource|string} layoutData json data file used to create the PDF report. | The JSON data file path present in the resource manager used to create the PDF report.
     */
    constructor(resource, layoutData) {
        super();
        if (typeof (resource) === "string" && typeof (layoutData) === "string") {
            this.ResourceName = resource;
            this.LayoutDataResourceName = layoutData;
        }
        else if (typeof (resource) !== "string" && typeof (layoutData) !== "string") {
            this.ResourceName = resource.resourceName;
            this.LayoutDataResourceName = layoutData.LayoutDataResourceName;
            this._Resources.push(resource);
            this._Resources.push(layoutData);
        }
        else {
            this.ResourceName = resource;
            this.LayoutDataResourceName = layoutData.LayoutDataResourceName;
            this._Resources.push(layoutData);
        }
        this._Type = InputType.Dlex;
    }

    toJSON() {
        return {
            layoutDataResourceName: this.LayoutDataResourceName,
            type: this._Type,
            resourceName: this.ResourceName,
            id: this.Id,
            templateId: this._templateId
        };
    }

}