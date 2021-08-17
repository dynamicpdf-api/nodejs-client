import { Response } from "./Response.js";

export class JsonResponse extends Response {
    JsonContent;
    constructor(jsonContent) {
        super();
        this.JsonContent = jsonContent;
    }
}