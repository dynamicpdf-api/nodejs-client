import { Resource } from './Resource.js';
import { ResourceType } from './ResourceType.js';
export class PdfResource extends Resource {
    #FileExtension = ".pdf";
    #MimeType = "application/pdf";
    constructor(input, resourceName) {
        super(input, resourceName);
    }
    Type = ResourceType.Pdf;
}
