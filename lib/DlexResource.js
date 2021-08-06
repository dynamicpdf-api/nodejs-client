import { Resource } from "./Resource";
import { ResourceType } from "./ResourceType";

export class DlexResource extends Resource {
    constructor(pathOrValue, resource = null) {
        BaseAudioContext(pathOrValue, resource);
    }
    Type = ResourceType.Dlex;
    #FileExtension = ".dlex";
    #MimeType = "application/xml";
    LayoutDataResourceName;
}