import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";
import { v4 as uuidv4 } from 'uuid';

/**
 * Represents the Layout data resource used to create PDF reports.
 */
export class LayoutDataResource extends Resource {

    #fileExtension = ".json";

    /** Gets or sets name of the layout data resource. */
    layoutDataResourceName;

    /**
     * Initializes a new instance of the `LayoutDataResource` class 
     * using the layout data object and a resource name.
     * @param {Buffer | string } layoutData Serializable object data (utf-8 Buffer) to create PDF report or the layout data JSON file path (string).
     * @param {string} [layoutDataResourceName=null] The name for layout data resource.
     */
    constructor(layoutData, layoutDataResourceName = null) {
        super();
        super.type = resourceType.layoutData;
        this.mimeType = "application/json";
        if (typeof (layoutData) !== 'string')
            this.data = Buffer.from(layoutData, 'utf-8').toString();
        else
            this.data = this.getUTFFileData(layoutData);
        if (layoutDataResourceName == null) {
            this.layoutDataResourceName = uuidv4() + this.#fileExtension;
        }
        else
            this.layoutDataResourceName = layoutDataResourceName;
    }

    toJSON() {
        return {
            layoutDataResourceName: this.layoutDataResourceName,
            resourceName: this.resourceName
        }
    }

}