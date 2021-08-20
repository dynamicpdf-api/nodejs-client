import { Endpoint } from './Endpoint.js';
import { ImageResponse } from './ImageResponse.js';
export class ImageInfo extends Endpoint {
    resource;
    #EndpointName = "image-info";
    StartPage;
    PageCount;
    constructor(resource) {
        super();
        this.resource = resource;
    }
    async Process() {
        return await this.ProcessAsync();
    }
    async ProcessAsync() {
        let url = new URL(this.BaseUrl + this.#EndpointName);
        return await this.postHttpRequest(url, this.resource.Data, "image/" + this.resource.FileExtension.substring(1), ImageResponse);
    }
};