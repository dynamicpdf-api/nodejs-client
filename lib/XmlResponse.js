import { JsonResponse } from './JsonResponse.js'

/** Represents the xml response. */
export class XmlResponse extends JsonResponse {

    /**
     * Initializes a new instance of the `XmlResponse` class.
     * @param {string} xmlContent The xml content of the response.
     */
    constructor(xmlContent) {
        super();
        this.content = xmlContent;
    }
    
    /** Gets the xml content. */
    content = [];

}
