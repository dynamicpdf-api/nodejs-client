import { Resource } from "./Resource";
import { ResourceType } from "./ResourceType";
export class LayoutDataResource extends Resource
{
    Type=ResourceType.LayoutData;
    #MimeType="application/json";
    #FileExtension=".json";
    LayoutDataResourceName;
    constructor(layoutData,layoutDataResourceName)
    {
        super(layoutData,layoutDataResourceName);
    }
}