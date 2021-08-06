import fs from 'fs';
import { Resource } from './Resource.js';
import { ResourceType } from './ResourceType.js';
export class ImageResource extends Resource {
    Type = ResourceType.Image;
    constructor(filePath, resourceName) {
        super(filePath, resourceName);
    }
    get #FileExtension() {
        fileHeader = new byte[16];
        Data = fileHeader.slice(0, 16);
        if (IsPngImage(fileHeader)) {
            MimeType = "image/png";
            return ".png";
        }
        else if (IsJpegImage(fileHeader)) {
            MimeType = "image/jpeg";
            return ".jpeg";
        }
        else if (IsGifImage(fileHeader)) {
            MimeType = "image/gif";
            return ".gif";
        }
        else if (IsTiffImage(fileHeader)) {
            MimeType = "image/tiff";
            return ".tiff";
        }
        else if (IsJpeg2000Image(fileHeader)) {
            MimeType = "image/jpeg";
            return ".jpeg";
        }
        else if (IsValidBitmapImage(fileHeader)) {
            mimeType = "image/bmp";
            return ".bmp";
        }
        else
            throw new EndPointException("Not supported image type or invalid image.");
    }
    IsJpeg2000Image(header) {
        return (header[0] == 0x00 && header[1] == 0x00 && header[2] == 0x00 && header[3] == 0x0C && header[4] == 0x6A &&
            header[5] == 0x50 && (header[6] == 0x1A || header[6] == 0x20) && (header[7] == 0x1A || header[7] == 0x20) &&
            header[8] == 0x0D && header[9] == 0x0A && header[10] == 0x87 && header[11] == 0x0A) ||
            (header[0] == 0xFF && header[1] == 0x4F && header[2] == 0xFF && header[3] == 0x51 && header[6] == 0x00 && header[7] == 0x00);
    }
    IsPngImage(header) {
        return header[0] == 0x89 && header[1] == 0x50 && header[2] == 0x4E && header[3] == 0x47 &&
            header[4] == 0x0D && header[5] == 0x0A && header[6] == 0x1A && header[7] == 0x0A;
    }
    IsTiffImage(header) {
        return (header[0] == 0x49 && header[1] == 0x49 && header[2] == 0x2A && header[3] == 0x00) ||
            (header[0] == 0x4D && header[1] == 0x4D && header[2] == 0x00 && header[3] == 0x2A);
    }
    IsGifImage(header) {
        return header[0] == 0x47 && header[1] == 0x49 && header[2] == 0x46 && header[3] == 0x38 && (header[4] == 0x37 || header[4] == 0x39) && header[5] == 0x61;
    }
    IsJpegImage(header) {
        return header[0] == 0xFF && header[1] == 0xD8 && header[2] == 0xFF;
    }
    IsValidBitmapImage(header) {
        return header[0] == 0x42 && header[1] == 0x4D;
    }
}
