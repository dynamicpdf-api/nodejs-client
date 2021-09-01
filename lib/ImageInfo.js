import { Endpoint } from './Endpoint.js';
import { ImageResource } from './ImageResource.js';
import { ImageResponse } from './ImageResponse.js';

/**
 * Represents an image information endpoint.
 */
export class ImageInfo extends Endpoint {

    #resource;
    #EndpointName = "image-info";

    /** Gets or sets the start page. */
    StartPage;

    /** Gets or sets the page count. */
    PageCount;

    /**
     * Initializes a new instance of the `ImageInfo` class.
     * @param {ImageResource} resource The image resource of type `ImageResource`.
     */
    constructor(resource) {
        super();
        this.#resource = resource;
    }

    /** Process the image resource to get image's information. */
    async Process() {
        return await this.ProcessAsync();
    }

    /**
     * Process the image resource to get image's information.
     * @returns ImageResponse.
     */
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.#resource.Data, "image/" + this.#resource.FileExtension.substring(1), ImageResponse);
    }
};