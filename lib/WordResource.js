import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";
import * as path from 'path';

/**
 * Represents a word resource object that is created using the word file and a name.
 */
export class WordResource extends Resource {
    #inputFileExtension;
    data;

    /**
     * Initializes a new instance of the `wordResource` class 
     * with word file path and resource name or
     * byte data of the word file and resource name as parameters.
     * @param {string | Buffer[]} word The word file path. | The Buffer array of the word file.
     * @param {string} resource The name of the resource.
     */
    constructor(word, resource = null) {
        super(word, resource);
        this.data=super.data;
        super.fileExtension = this.#fileExtension();
        super.type = resourceType.word;
        if (resource == undefined)
            this.#addFileExtension();
    }

    #addFileExtension() {
        this.resourceName = this.resourceName + this.#fileExtension;
    }
    #fileExtension() {
        this.#inputFileExtension = "";
        if (this.resourceName != "") {
            this.#inputFileExtension = path.extname(this.resourceName);
        }
        else if (typeof (this.word) === "string") {
            this.#inputFileExtension = path.extname(this.fileExtension);
        }
        if (this.#inputFileExtension == ".doc") {
            super.mimeType = "application/msword";
            return ".doc";
        }
        else if (this.#inputFileExtension == ".docx" && this.data[0] == 0x50 && this.data[1] == 0x4b) {
            super.mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            return ".docx";
        }
        else if (this.#inputFileExtension == ".odt" && this.data[0] == 0x50 && this.data[1] == 0x4b) {
            super.mimeType = "application/vnd.oasis.opendocument.text";
            return ".odt";
        }
    }

    toJSON() {
        return {
            layoutDataResourceName: this.layoutDataResourceName,
            resourceName: this.resourceName
        };
    }
}