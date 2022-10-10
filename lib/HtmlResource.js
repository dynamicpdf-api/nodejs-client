import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";

/**
 * Represents a Html resource object that is created using the Html string and a name.
 */
export class HtmlResource extends Resource {

   // #FileExtension = ".html";

    /**
     * Initializes a new instance of the `HtmlResource` class 
     * with html string and resource name.
     * @param {string} html The Html string.
     * @param {string} resource The name of the resource.
     */
    constructor(htmlString, resourceName = null) {
        super(htmlString, resourceName);
        // super.fileExtension = this.#FileExtension;
        super.mimeType = "application/pdf";
        super.type = resourceType.html;
        // if (resource == undefined)
        //     this.#addFileExtension();
    }

    // #addFileExtension() {
    //     this.resourceName = this.resourceName + this.#FileExtension;
    // }
}