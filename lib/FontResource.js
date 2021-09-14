import { Resource } from "./Resource.js";
import { ResourceType } from "./ResourceType.js";
export class FontResource extends Resource {
    
    constructor(filePath, resourceName = null) {
        super(filePath, resourceName);
        super.Type = ResourceType.Font;
    }
    
    get FileExtension() {
        if (this.Data[0] == 0x4f && this.Data[1] == 0x54 && this.Data[2] == 0x54 && this.Data[3] == 0x4f) {
            super.MimeType = "font/otf";
            return ".otf";
        }
        else if (this.Data[0] == 0x00 && this.Data[1] == 0x01 && this.Data[2] == 0x00 && this.Data[3] == 0x00) {
            super.MimeType = "font/ttf";
            return ".ttf";
        }
        else throw "Unsupported font";
    }
}