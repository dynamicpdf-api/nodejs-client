import { JsonResponse } from './JsonResponse.js'
export class PdfTextResponse extends JsonResponse {
    Content = [];
    constructor(jsonContent) {
        super(jsonContent);
        this.Content = JSON.parse(this.JsonContent);
    }
}
