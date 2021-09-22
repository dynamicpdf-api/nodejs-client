/**
 * Represents the pdf information.
 */
export class PdfInformation {

    constructor() { }

    /** Gets the author. */
    Author;

    /** Gets the subject. */
    Subject;

    /** Gets the keywords. */
    Keywords;

    /** Gets the creator. */
    Creator;

    /** Gets the producer. */
    Producer;

    /** Gets the title. */
    Title;

    /** Gets the collection of PageInformation. */
    Pages = [];

    /** Gets the form fields. */
    FormFields;

    /** Gets the custom properties. */
    CustomProperties;

    /** Gets the boolean representing xmp meta data. */
    XmpMetaData;

    /** Gets the boolean, indicating whether the pdf is signed. */
    Signed;

    /** Gets the boolean, indicating whether the pdf is tagged. */
    Tagged;

    toJson() {
        return {
            author: this.Author,
            title: this.Title,
            subject: this.Subject,
            creator: this.Creator,
            keywords: this.Keywords,
            formFields: this.FormFields,
            customProperties: this.CustomProperties,
            xmpMetaData: this.XmpMetaData,
            signed: this.Signed,
            tagged: this.Tagged
        }
    }
}
