import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";
export class LayoutDataResource extends Resource
{
    Type=ResourceType.LayoutData;
    MimeType="application/json";
    #FileExtension=".json";
    LayoutDataResourceName;
    constructor(layoutData,layoutDataResourceName)
    {
        super(layoutData,layoutDataResourceName);
    }
}