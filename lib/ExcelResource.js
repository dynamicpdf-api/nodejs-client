import { Resource } from "./Resource.js";
import { resourceType } from "./ResourceType.js";
import * as path from 'path';

/**
 * Represents a excel resource object that is created using the excel file and a name.
 */
export class ExcelResource extends Resource {
    #inputFileExtension;
    data;

    /**
     * Initializes a new instance of the `excelResource` class 
     * with excel file path and resource name or
     * byte data of the excel file and resource name as parameters.
     * @param {string | Buffer[]} excel The excel file path. | The Buffer array of the excel file.
     * @param {string} resource The name of the resource.
     */
    constructor(excel, resource = null) {
        super(excel, resource);
        this.data=super.data;
        super.fileExtension = this.#fileExtension();
        super.type = resourceType.excel;
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
        else if (typeof (this.excel) === "string") {
            this.#inputFileExtension = path.extname(this.fileExtension);
        }
        if (this.#inputFileExtension == ".xls") {
            super.mimeType = "application/vnd.ms-excel";
            return ".xls";
        }
        else if (this.#inputFileExtension == ".xlsx" && this.data[0] == 0x50 && this.data[1] == 0x4b) {
            super.mimeType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            return ".xlsx";
        }
    }

    toJSON() {
        return {
            layoutDataResourceName: this.layoutDataResourceName,
            resourceName: this.resourceName
        };
    }
}