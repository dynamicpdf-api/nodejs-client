import { Template } from "./Template.js";
import { Font } from "./Font.js";
import { FormField } from "./FormField.js";
import { Outline } from "./Outline.js";
import { Input } from "./Input.js";

export class PdfInstructions {

    Author = "Cete Software";
    Title;
    Subject;
    Creater = "DynamicPDF Cloud Api";
    Keywords;
    Security;
    FormFields = [];
    FlattenAllFormFields;
    RetainSignatureFormFields;
    Fonts = [];
    Templates = [];
    Outlines = [];
    Inputs = [];

    get Templates() {
        if (this.Templates == null)
            this.Templates = new Array(Template);
        return this.Templates;
    }

    get Fonts() {
        if (this.Fonts == null)
            this.Fonts = new Array(Font);
        return this.Fonts;
    }

    get FormFields() {
        if (this.FormFields == null)
            this.FormFields = new Array(FormField);
        return this.FormFields;
    }

    get Outlines() {
        if (this.Outlines == null)
            this.Outlines = new Array(Outline);
        return this.Outlines;
    }
};