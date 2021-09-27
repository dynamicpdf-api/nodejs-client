import { Template } from "./Template.js";
import { Font } from "./Font.js";
import { FormField } from "./FormField.js";
import { Input } from "./Input.js";
import { OutlineList } from "./OutlineList.js";

export class PdfInstructions {

    Author = "Cete Software";
    Title;
    Subject;
    Creator = "DynamicPDF Cloud Api";
    Keywords;
    Security;
    formFields = [];
    FlattenAllFormFields;
    RetainSignatureFormFields;
    fonts = [];
    #templates = [];
    #outlines;
    Inputs = [];

    get Templates() {
        if (this.#templates == null)
            this.#templates = new Array(Template);
        return this.#templates;
    }

    get Fonts() {
        if (this.fonts == null)
            this.fonts = new Array(Font);
        return this.fonts;
    }

    get FormFields() {
        if (this.formFields == null)
            this.formFields = new Array(FormField);
        return this.formFields;
    }
    get Outlines() {
        if (this.#outlines == null)
            this.#outlines = new OutlineList();
        return this.#outlines;
    }
    get GetOutlines() {
        if (this.#outlines != null)
            return this.#outlines.Outlines;
        return null;
    }
    toJSON() {
        return {
            author: this.Author,
            title: this.Title,
            subject: this.Subject,
            creator: this.Creator,
            keywords: this.Keywords,
            security: this.Security,
            templates: this.Templates,
            fonts: this.Fonts,
            formFields: this.FormFields,
            outlines: this.GetOutlines,
            inputs: this.Inputs,
            flattenAllFormFields: this.FlattenAllFormFields,
            retainSignatureFormFields: this.RetainSignatureFormFields
        };
    }
};