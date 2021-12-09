import { Response } from "./Response.js";

/**Represents the base class for json response. */
export class JsonResponse extends Response {

    /** Gets the json content. */
    jsonContent;
    
    constructor(jsonContent) {
        super();
        this.jsonContent = jsonContent;
    }
}