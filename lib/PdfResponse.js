import { Response } from './Response.js';
export class PdfResponse extends Response {
    constructor(pdfContent) {
        super();
        this.Content = pdfContent;
    }
    Content = [];
}
