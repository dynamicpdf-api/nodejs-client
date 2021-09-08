import FormData from 'form-data';
import { Endpoint } from './Endpoint.js';
import { PdfInstructions } from './PdfInstructions.js';
import { InputType } from './InputType.js';
import { PdfInput } from './PdfInput.js';
import { ResourceType } from './ResourceType.js';
import { PageInput } from './PageInput.js';
import { ImageInput } from './ImageInput.js';
import { DlexInput } from './DlexInput.js';
import { PdfResource } from './PdfResource.js';
import { DlexResource } from './DlexResource.js';
import { LayoutDataResource } from './LayoutDataResource.js';

/** Represents a pdf endpoint. */
export class Pdf extends Endpoint {

    #pdfInstructions;
    #form;
    Resources;

    /** Initializes a new instance of the `Pdf` class. */
    constructor() {
        super();
        this.#pdfInstructions = new PdfInstructions();
    }
    get Instructions() {
        return this.#pdfInstructions;
    }
    EndpointName = "pdf";

    /** Gets the author. */
    get Author() {
        return this.#pdfInstructions.Author;
    }

    /** sets the author. */
    set Author(value) {
        this.#pdfInstructions.Author = value;
    }

    /** Gets the title. */
    get Title() {
        return this.#pdfInstructions.Title;
    }

    /** sets the title.*/
    set Title(value) {
        this.#pdfInstructions.Title = value;
    }

    /** Gets the subject. */
    get Subject() {
        return this.#pdfInstructions.Subject;
    }

    /** sets the subject. */
    set Subject(value) {
        this.#pdfInstructions.Subject = value;
    }

    /** Gets the creator. */
    get Creator() {
        return this.#pdfInstructions.Creator;
    }

    /** sets the creator. */
    set Creator(value) {
        this.#pdfInstructions.Creator = value;
    }

    /** Gets the keywords. */
    get Keywords() {
        return this.#pdfInstructions.Keywords;
    }

    /** sets the keywords. */
    set Keywords(value) {
        this.#pdfInstructions.Keywords = value;
    }

    /** Gets the security. */
    get Security() {
        return this.#pdfInstructions.Security;
    }

    /** sets the security. */
    set Security(value) {
        this.#pdfInstructions.Security = value;
    }

    /** Gets the value indicating whether to flatten all form fields. */
    get FlattenAllFormFields() {
        return this.#pdfInstructions.FlattenAllFormFields;
    }

    /** sets the value indicating whether to flatten all form fields. */
    set FlattenAllFormFields(value) {
        this.#pdfInstructions.FlattenAllFormFields = value;
    }

    /** Gets the value indicating whether to retain signature form field. */
    get RetainSignatureFormFields() {
        return this.#pdfInstructions.RetainSignatureFormFields;
    }

    /** sets the value indicating whether to retain signature form field. */
    set RetainSignatureFormFields(value) {
        this.#pdfInstructions.RetainSignatureFormFields = value;
    }

    /**
     * Returns a `PdfInput` object containing the input pdf.
     * @param {resource | cloudResourcePath} value The resource of type `PdfResource` | The resource path in cloud resource manager.
     * @param {MergeOptions} options The merge options for the pdf.
     * @returns PdfInput
     */
    AddPdf(value, options = null) {
        var input = new PdfInput(value, options);
        this.Inputs.push(input);
        return input;
    }

    /**
     * Returns a `ImageInput` object containing the input pdf.
     * @param {string | PdfResource} value The resource of type `ImageResource` | The resource path in cloud resource manager.
     * @returns ImageInput
     */
    AddImage(value) {
        var input = new ImageInput(value);
        this.Inputs.push(input);
        return input;
    }

    /**
     * Returns a `DlexInput` object containing the input pdf.
     * @param {DlexResource} value The dlex resource of type `DlexResource` | The resource path in cloud resource manager.
     * @param {LayoutDataResource} value1 The layout data resource of type `LayoutDataResource`
     * @returns DlexInput
     */
    AddDlex(value, value1) {
        var input = new DlexInput(value, value1);
        this.Inputs.push(input);
        return input;
    }

    /**
     * Returns a `PageInput` object containing the input pdf.
     * @param {number} pageWidth The width of the page.
     * @param {number} pageHeight The height of the page.
     * @returns PageInput 
     */
    AddPage(pageWidth, pageHeight) {
        var input = new PageInput(pageWidth, pageHeight);
        this.Inputs.push(input);
        return input;
    }

    /**Gets the inputs. */
    get Inputs() {
        return this.#pdfInstructions.Inputs;
    }

    /** Gets the templates. */
    get Templates() {
        return this.#pdfInstructions.Templates;
    }

    /** Gets the fonts. */
    get Fonts() {
        return this.#pdfInstructions.Fonts;
    }

    /** Gets the formFields. */
    get FormFields() {
        return this.#pdfInstructions.FormFields;
    }

    /** Gets the outlines. */
    get Outlines() {
        return this.#pdfInstructions.Outlines;
    }

    /** Process to create pdf. */
    async Process() {
        return await this.ProcessAsync();
    }     
    async ProcessAsync() {
        this.#form = new FormData();
        var finalResources = [];
        this.#pdfInstructions.Inputs.forEach((input) => {
            if (input.Type == InputType.Page) {
                input.Elements.forEach((element) => {
                    if (element.Resource != null) {
                        finalResources.push(element.Resource);
                    }
                    if (element.TextFont != null) {
                        this.#pdfInstructions.Fonts.push(element.TextFont);
                    }
                });
            }
            input.Resources.forEach((resource) => {
                finalResources.push(resource);
            });
            if (input.Template) {
                this.#pdfInstructions.Templates.push(input.Template);
                if (this.loggingEnabled) {
                    console.log(this.#pdfInstructions);
                }
                if (input.Template.Elements != null && input.Template.Elements.length > 0) {
                    input.Template.Elements.forEach((element) => {
                        if (element.Resource != null)
                            finalResources.push(element.Resource);
                        if (element.TextFont != null)
                            this.#pdfInstructions.Fonts.push(element.TextFont);

                    });

                }
            }
        });
        const keysToCamel = function (o) {
            if (isObject(o)) {
                const n = {};

                Object.keys(o)
                    .forEach((k) => {
                        n[toCamel(k)] = keysToCamel(o[k]);
                    });

                return n;
            } else if (isArray(o)) {
                return o.map((i) => {
                    return keysToCamel(i);
                });
            }

            return o;
        };
        if (this.loggingEnabled) {
            console.log(JSON.stringify(keysToCamel(this.#pdfInstructions)));
        }
        this.#form.append('Instructions', JSON.stringify(keysToCamel(this.#pdfInstructions)), "Instructions.json");
        finalResources.forEach((resource) => {
            if (resource.Type == ResourceType.LayoutData) {
                this.#form.append('Resource', resource.Data, resource.LayoutDataResourceName);
            }
            this.#form.append('Resource', resource.Data, resource.resourceName);
        });
        return await this.postForm(this.#form, this.EndpointName);
    }
    GetInstructionsJson() {
        const keysToCamel = function (o) {
            if (isObject(o)) {
                const n = {};

                Object.keys(o)
                    .forEach((k) => {
                        n[toCamel(k)] = keysToCamel(o[k]);
                    });

                return n;
            } else if (isArray(o)) {
                return o.map((i) => {
                    return keysToCamel(i);
                });
            }

            return o;
        };
        this.#pdfInstructions.Inputs.forEach((input) => {
            if (input.Type == InputType.Page) {
                input.Elements.forEach((element) => {
                    if (element.TextFont != null) {
                        this.#pdfInstructions.Fonts.push(element.TextFont);
                    }
                });
            }
            if (input.Template != null) {
                this.#pdfInstructions.Templates.push(input.Template);
                if (this.loggingEnabled) {
                    console.log(this.#pdfInstructions);
                }
                if (input.Template.Elements != null && input.Template.Elements.length > 0) {
                    input.Template.Elements.forEach((element) => {
                        if (element.TextFont != null)
                            this.#pdfInstructions.Fonts.push(element.TextFont);

                    });

                }
            }
        });
        var jsonText = JSON.stringify(JSON.stringify(keysToCamel(this.#pdfInstructions)));
        return jsonText;
    }
}
const toCamel = (str) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
};
const isArray = function (a) {
    return Array.isArray(a);
};
const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

