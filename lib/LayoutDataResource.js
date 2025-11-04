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
     * @param {Object | string | Buffer} layoutData - The layout data to use; can be a object (serialized to JSON), a JSON string, a `.json` file path, or a UTF-8 encoded Buffer (e.g., from `fs.readFileSync`).
     * @param {string} [layoutDataResourceName=null] The name for layout data resource.
     */
    constructor(layoutData, layoutDataResourceName = null) {
        super();
        super.type = resourceType.layoutData;
        this.mimeType = "application/json";
        if (Buffer.isBuffer(layoutData)) {
            this.data = layoutData.toString("utf8");
        } else if (typeof layoutData === "object") {
            const jsonText = JSON.stringify(layoutData);
            this.data = Buffer.from(jsonText, "utf8"); 
        } else if (typeof layoutData === "string") {
            if (layoutData.endsWith(".json")) {
                this.data = this.getUTFFileData(layoutData); 
            } else {
                this.data = Buffer.from(layoutData, "utf8");
            }
        }
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