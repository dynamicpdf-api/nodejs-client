import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";
export class FontResource extends Resource {

    constructor(filePath, resourceName = null) {
        super(filePath, resourceName);
        super.type = resourceType.font;
    }

    get fileExtension() {
        if (this.data[0] == 0x4f && this.data[1] == 0x54 && this.data[2] == 0x54 && this.data[3] == 0x4f) {
            super.mimeType = "font/otf";
            return ".otf";
        }
        else if (this.data[0] == 0x00 && this.data[1] == 0x01 && this.data[2] == 0x00 && this.data[3] == 0x00) {
            super.mimeType = "font/ttf";
            return ".ttf";
        }
        else throw "Unsupported font";
    }
    toJSON() {
        return {
            resourceName: this.resourceName
        }
    }
}