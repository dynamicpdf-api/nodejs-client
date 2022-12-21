import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";

/**
 * Represents a Html resource object that is created using the Html string and a name.
 */
export class HtmlResource extends Resource {

    /**
     * Initializes a new instance of the `HtmlResource` class 
     * with html string and resource name.
     * @param {string} html The Html string.
     * @param {string} resource The name of the resource.
     */
    constructor(htmlString, resourceName = null) {
        super(htmlString, resourceName);
        super.fileExtension = ".html";
        super.mimeType = "text/html";
        super.type = resourceType.html;
    }
}