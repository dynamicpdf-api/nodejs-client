import { Endpoint } from './Endpoint.js';
import { ImageResource } from './ImageResource.js';
import { ImageResponse } from './ImageResponse.js';

/**
 * Represents an image information endpoint.
 */
export class ImageInfo extends Endpoint {

    #resource;   

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
        this.EndPointName = "image-info";
    }

    /**
     * Process the image resource to get image's information.
     * @returns ImageResponse.
     */
    async Process() {
        let endpointUrl = this.BaseUrl.endsWith("/") ? this.BaseUrl + this.EndPointName : this.BaseUrl + "/" + this.EndPointName;
        let url = new URL(endpointUrl);
        return await this.postHttpRequest(url, this.#resource.Data, "image/" + this.#resource.FileExtension.substring(1), ImageResponse);
    }

    toJSON() {
        return {
            startPage: this.StartPage,
            pageCount: this.PageCount
        };
    }
};