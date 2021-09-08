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
    templates = [];
    #outlines;
    Inputs = [];
    outlines;

    get Templates() {
        if (this.templates == null)
            this.templates = new Array(Template);
        return this.templates;
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
        this.outlines = this.#outlines.Outlines;
        return this.#outlines;
    }

};