import { JsonResponse } from './JsonResponse.js'
export class ImageResponse extends JsonResponse {
    Content = [];
    constructor(jsonContent) {
        super();
        this.Content = JSON.parse(jsonContent);
    }
}
