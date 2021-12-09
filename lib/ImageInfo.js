import { Endpoint } from './Endpoint.js';
import { ImageResource } from './ImageResource.js';
import { ImageResponse } from './ImageResponse.js';

/**
 * Represents an image information endpoint.
 */
export class ImageInfo extends Endpoint {

    #resource;   

    /** Gets or sets the start page. */
    startPage;

    /** Gets or sets the page count. */
    pageCount;

    /**
     * Initializes a new instance of the `ImageInfo` class.
     * @param {ImageResource} resource The image resource of type `ImageResource`.
     */
    constructor(resource) {
        super();
        this.#resource = resource;
        this.endPointName = "image-info";
    }

    /**
     * Process the image resource to get image's information.
     * @returns A Promise of ImageResponse callback.
     */
    async process() {
        let endpointUrl = this.baseUrl.endsWith("/") ? this.baseUrl + "v1.0/" + this.endPointName : this.baseUrl + "/v1.0/" + this.endPointName;
        let url = new URL(endpointUrl);
        return await this._postHttpRequest(url, this.#resource.data, "image/" + this.#resource.fileExtension.substring(1), ImageResponse);
    }

    toJSON() {
        return {
            startPage: this.startPage,
            pageCount: this.pageCount
        };
    }
};