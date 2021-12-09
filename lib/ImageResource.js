import fs from 'fs';
import { Resource } from './Resource.js';
import { resourceType } from './ResourceType.js';

/**
 * Represents an image resource used to create an `ImageInput`
 * object to create PDF from images.
 */
export class ImageResource extends Resource {

    /**
     * Initializes a new instance of the `ImageResource` class.
     * @param {string | Buffer[]} filePath The image file path. | The byte array of the image file.
     * @param {string} resourceName The name of the resource.
     */
    constructor(image, resourceName) {
        super(image, resourceName);
        super.type = resourceType.image;
        if (resourceName == undefined)
            this.#addFileExtension();
    }

    #addFileExtension() {
        this.resourceName = this.resourceName + this.fileExtension;
    }

    get fileExtension() {
        var fileHeader = [];
        fileHeader = super.data;
        fileHeader = fileHeader.slice(0, 16);
        if (this.isPngImage(fileHeader)) {
            super.mimeType = "image/png";
            super.fileExtension = ".png";
            return ".png";
        }
        else if (this.isJpegImage(fileHeader)) {
            super.mimeType = "image/jpeg";
            super.fileExtension = ".jpeg"
            return ".jpeg";
        }
        else if (this.isGifImage(fileHeader)) {
            super.mimeType = "image/gif";
            super.fileExtension = "gif";
            return ".gif";
        }
        else if (this.isTiffImage(fileHeader)) {
            super.mimeType = "image/tiff";
            super.fileExtension = ".tiff";
            return ".tiff";
        }
        else if (this.isJpeg2000Image(fileHeader)) {
            super.mimeType = "image/jpeg";
            super.fileExtension = ".jpeg";
            return ".jpeg";
        }
        else if (this.isValidBitmapImage(fileHeader)) {
            super.mimeType = "image/bmp";
            super.fileExtension = ".bmp"
            return ".bmp";
        }
        else
            throw "Not supported image type or invalid image.";
    }
    isJpeg2000Image(header) {
        return (header[0] == 0x00 && header[1] == 0x00 && header[2] == 0x00 && header[3] == 0x0C && header[4] == 0x6A &&
            header[5] == 0x50 && (header[6] == 0x1A || header[6] == 0x20) && (header[7] == 0x1A || header[7] == 0x20) &&
            header[8] == 0x0D && header[9] == 0x0A && header[10] == 0x87 && header[11] == 0x0A) ||
            (header[0] == 0xFF && header[1] == 0x4F && header[2] == 0xFF && header[3] == 0x51 && header[6] == 0x00 && header[7] == 0x00);
    }
    isPngImage(header) {
        return header[0] == 0x89 && header[1] == 0x50 && header[2] == 0x4E && header[3] == 0x47 &&
            header[4] == 0x0D && header[5] == 0x0A && header[6] == 0x1A && header[7] == 0x0A;
    }
    isTiffImage(header) {
        return (header[0] == 0x49 && header[1] == 0x49 && header[2] == 0x2A && header[3] == 0x00) ||
            (header[0] == 0x4D && header[1] == 0x4D && header[2] == 0x00 && header[3] == 0x2A);
    }
    isGifImage(header) {
        return header[0] == 0x47 && header[1] == 0x49 && header[2] == 0x46 && header[3] == 0x38 && (header[4] == 0x37 || header[4] == 0x39) && header[5] == 0x61;
    }
    isJpegImage(header) {
        return header[0] == 0xFF && header[1] == 0xD8 && header[2] == 0xFF;
    }
    isValidBitmapImage(header) {
        return header[0] == 0x42 && header[1] == 0x4D;
    }
}
