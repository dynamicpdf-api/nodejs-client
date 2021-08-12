import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";
import { v4 as uuidv4 } from 'uuid';
export class LayoutDataResource extends Resource {
    Type = ResourceType.LayoutData;
    
    #FileExtension = ".json";
    LayoutDataResourceName;
    constructor(layoutData, layoutDataResourceName = null) {
        super();
        this.MimeType = "application/json";
        if (typeof (layoutData) !== 'string')
            this.Data = Buffer.from(layoutDataResourceName, 'utf-8').toString();
        else 
            this.Data = this.GetUTFFileData(layoutData);
        if (layoutDataResourceName == null) {
            this.LayoutDataResourceName = uuidv4();
        }
        else
            this.LayoutDataResourceName = layoutDataResourceName;
    }
}