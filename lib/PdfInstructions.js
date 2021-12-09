import { Template } from "./Template.js";
import { Font } from "./Font.js";
import { FormField } from "./FormField.js";
import { Input } from "./Input.js";
import { OutlineList } from "./OutlineList.js";

export class PdfInstructions {

    author = "Cete Software";
    title;
    subject;
    creator = "DynamicPDF Cloud Api";
    keywords;
    security;
    formFields = [];
    flattenAllFormFields;
    retainSignatureFormFields;
    fonts = [];
    #templates = [];
    #outlines;
    inputs = [];

    get templates() {
        if (this.#templates == null)
            this.#templates = new Array(Template);
        return this.#templates;
    }

    get fonts() {
        if (this.fonts == null)
            this.fonts = new Array(Font);
        return this.fonts;
    }

    get formFields() {
        if (this.formFields == null)
            this.formFields = new Array(FormField);
        return this.formFields;
    }
    get outlines() {
        if (this.#outlines == null)
            this.#outlines = new OutlineList();
        return this.#outlines;
    }
    get getOutlines() {
        if (this.#outlines != null)
            return this.#outlines.outlines;
        return null;
    }
    toJSON() {
        return {
            author: this.author,
            title: this.title,
            subject: this.subject,
            creator: this.creator,
            keywords: this.keywords,
            security: this.security,
            templates: this.templates,
            fonts: this.fonts,
            formFields: this.formFields,
            outlines: this.getOutlines,
            inputs: this.inputs,
            flattenAllFormFields: this.flattenAllFormFields,
            retainSignatureFormFields: this.retainSignatureFormFields
        };
    }
};