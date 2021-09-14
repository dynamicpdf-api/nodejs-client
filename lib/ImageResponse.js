import { JsonResponse } from './JsonResponse.js'

/**
 * Represents an image response.
 */
export class ImageResponse extends JsonResponse {

    /** Gets or sets a collection of `ImageInformation` */
    Content = [];
    
    /**
     * Initializes a new instance of the `ImageResponse` class.
     * @param {string} imageResponse The image content of the response.
     */
    constructor(imageResponse) {
        super();
        this.Content = JSON.parse(imageResponse);
    }
}
