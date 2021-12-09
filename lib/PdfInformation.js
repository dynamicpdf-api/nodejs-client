/**
 * Represents the pdf information.
 */
export class PdfInformation {

    constructor() { }

    /** Gets the author. */
    author;

    /** Gets the subject. */
    subject;

    /** Gets the keywords. */
    keywords;

    /** Gets the creator. */
    creator;

    /** Gets the producer. */
    producer;

    /** Gets the title. */
    title;

    /** Gets the collection of PageInformation. */
    pages = [];

    /** Gets the form fields. */
    formFields;

    /** Gets the custom properties. */
    customProperties;

    /** Gets the boolean representing xmp meta data. */
    xmpMetaData;

    /** Gets the boolean, indicating whether the pdf is signed. */
    signed;

    /** Gets the boolean, indicating whether the pdf is tagged. */
    tagged;

    toJson() {
        return {
            author: this.author,
            title: this.title,
            subject: this.subject,
            creator: this.creator,
            keywords: this.keywords,
            formFields: this.formFields,
            customProperties: this.customProperties,
            xmpMetaData: this.xmpMetaData,
            signed: this.signed,
            tagged: this.tagged
        }
    }
}
