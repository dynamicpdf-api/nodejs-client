import { JsonResponse } from './JsonResponse.js'
export class XmlResponse extends JsonResponse {
    Content = [];
    constructor(xmlContent) {
        super();
        this.Content = xmlContent;
    }
}
