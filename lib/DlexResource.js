import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";

export class DlexResource extends Resource {
    constructor(pathOrValue, resource = null) {
        super(pathOrValue, resource);
        if (resource == undefined)
            this.#addFileExtension();
    }
    #addFileExtension() {
        this.resourceName = this.resourceName + this.#FileExtension;
    }
    Type = ResourceType.Dlex;
    #FileExtension = ".dlex";
    MimeType = "application/xml";
    LayoutDataResourceName;
}