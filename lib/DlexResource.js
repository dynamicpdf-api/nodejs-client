import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";

export class DlexResource extends Resource {
    constructor(pathOrValue, resource = null) {
        super(pathOrValue, resource);
    }
    Type = ResourceType.Dlex;
    #FileExtension = ".dlex";
    MimeType = "application/xml";
    LayoutDataResourceName;
}