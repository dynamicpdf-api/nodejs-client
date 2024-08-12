import { Resource } from './Resource.js';
import { resourceType } from './ResourceType.js';
import { ImageResource } from './ImageResource.js';
import * as path from 'path';

export class AdditionalResource extends Resource {

    constructor(resource, resourceName, type) {
        if (typeof (resource) === "string") {
            super(resource, resourceName);
            this.type = this.getResourceType(resource);
        } else {
            super(resource, resourceName);
            this.type = type;
        }
    }

    getResourceType(resourcePath)
    {
        let type = resourceType.pdf;
        let fileExtension = path.extname(resourcePath)
        switch(fileExtension)
        {
            case ".pdf" :
                type= resourceType.pdf;
                break;
            case ".dlex" : 
                type=resourceType.dlex;
                break;
            case ".json":
                type = resourceType.layoutData;
                break;
            case ".ttf":
            case ".otf":
                type = resourceType.font;
                break;
            case ".tiff":
            case ".tif":
            case ".png":
            case ".gif":
            case ".jpeg":
            case ".jpg":
            case ".bmp":
                type = resourceType.image;
                break;  
            case ".html":
                type = resourceType.html;
                break; 
        }
        return type;
    }

    get FileExtension() {
        switch (this.type) {
            case 'Image':
                const fileHeader = this.data.slice(0, 16);
                if (ImageResource.isPngImage(fileHeader)) {
                    this.mimeType = 'image/png';
                    return '.png';
                } else if (ImageResource.isJpegImage(fileHeader)) {
                    this.mimeType = 'image/jpeg';
                    return '.jpeg';
                } else if (ImageResource.isGifImage(fileHeader)) {
                    this.mimeType = 'image/gif';
                    return '.gif';
                } else if (ImageResource.isTiffImage(fileHeader)) {
                    this.mimeType = 'image/tiff';
                    return '.tiff';
                } else if (ImageResource.isJpeg2000Image(fileHeader)) {
                    this.mimeType = 'image/jpeg';
                    return '.jpeg';
                } else if (ImageResource.isValidBitmapImage(fileHeader)) {
                    this.mimeType = 'image/bmp';
                    return '.bmp';
                } else throw "Not supported image type or invalid image.";
            case 'Pdf':
                this.mimeType = 'application/pdf';
                return '.pdf';
            case 'LayoutData':
                this.mimeType = 'application/json';
                return '.json';
            case 'Dlex':
                this.mimeType = 'application/xml';
                return '.dlex';
            case 'Font':
                if (this.data[0] == 0x4f && this.data[1] == 0x54 && this.data[2] == 0x54 && this.data[3] == 0x4f) {
                    this.mimeType = "font/otf";
                    return ".otf";
                }
                else if (this.data[0] == 0x00 && this.data[1] == 0x01 && this.data[2] == 0x00 && this.data[3] == 0x00) {
                    this.mimeType = "font/ttf";
                    return ".ttf";
                }
                else throw "Unsupported font";
            case 'Html':
                this.mimeType = 'text/html';
                return '.html';             
        }
        return null;
    }
}