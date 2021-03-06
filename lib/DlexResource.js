import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";

/**
 * Represents a Dlex resource object that is created using the DLEX file and a name.
 */
export class DlexResource extends Resource {

    #FileExtension = ".dlex";

    /** Gets or sets name for layout data resource. */
    layoutDataResourceName;

    /**
     * Initializes a new instance of the `DlexResource` class 
     * with DLEX file path and resource name or
     * byte data of the DLEX file and resource name as parameters.
     * @param {string | Buffer[]} dlex The dlex file path. | The Buffer array of the dlex file.
     * @param {string} resource The name of the resource.
     */
    constructor(dlex, resource = null) {
        super(dlex, resource);
        super.fileExtension = this.#FileExtension;
        super.mimeType = "application/xml";
        super.type = resourceType.dlex;
        if (resource == undefined)
            this.#addFileExtension();
    }

    #addFileExtension() {
        this.resourceName = this.resourceName + this.#FileExtension;
    }

    toJSON() {
        return {
            layoutDataResourceName: this.layoutDataResourceName,
            resourceName: this.resourceName
        };
    }
}