import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";
import { v4 as uuidv4 } from 'uuid';

/**
 * Represents the Layout data resource used to create PDF reports.
 */
export class LayoutDataResource extends Resource {

    #fileExtension = ".json";

    Type = ResourceType.LayoutData;    

    /** Gets or sets name of the layout data resource. */
    LayoutDataResourceName;

    /**
     * Initializes a new instance of the `LayoutDataResource` class 
     * using the layout data object and a resource name.
     * @param {LayoutData | string } layoutData Serializable object data to create PDF report. | The layout data JSON file path.
     * @param {string} layoutDataResourceName The name for layout data resource.
     */
    constructor(layoutData, layoutDataResourceName = null) {
        super();
        this.MimeType = "application/json";
        if (typeof (layoutData) !== 'string')
            this.Data = Buffer.from(layoutDataResourceName, 'utf-8').toString();
        else
            this.Data = this.GetUTFFileData(layoutData);
        if (layoutDataResourceName == null) {
            this.LayoutDataResourceName = uuidv4() + this.#fileExtension;
        }
        else
            this.LayoutDataResourceName = layoutDataResourceName;
        if (layoutDataResourceName == undefined)
            this.#addFileExtension();
    }
    
    #addFileExtension() {
        this.resourceName = this.resourceName + this.#fileExtension;
    }
}