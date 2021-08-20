import { JsonResponse } from './JsonResponse.js'
export class PdfInfoResponse extends JsonResponse {
    Content = [];
    constructor(jsonContent) {
        super(jsonContent);
        this.Content = JSON.parse(this.JsonContent);
    }
}
