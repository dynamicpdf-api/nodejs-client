import { JsonResponse } from './JsonResponse.js'

/**
 * Represents an image response.
 */
export class ImageResponse extends JsonResponse {

    /** Gets or sets a collection of `ImageInformation` */
    Content = [];
    
    /**
     * Initializes a new instance of the `ImageResponse` class.
     * @param {string} jsonContent The image content of the response.
     */
    constructor(jsonContent) {
        super();
        this.Content = JSON.parse(jsonContent);
    }
}
