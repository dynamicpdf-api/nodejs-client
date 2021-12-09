import FormData from 'form-data';
import { Endpoint } from './Endpoint.js';
import { PdfInstructions } from './PdfInstructions.js';
import { inputType } from './InputType.js';
import { PdfInput } from './PdfInput.js';
import { resourceType } from './ResourceType.js';
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

    _Resources;

    /** Initializes a new instance of the `Pdf` class. */
    constructor() {
        super();
        this.#pdfInstructions = new PdfInstructions();
        this.endPointName = "pdf";
    }
    get instructions() {
        return this.#pdfInstructions;
    }

    /** Gets the author. */
    get author() {
        return this.#pdfInstructions.author;
    }

    /** sets the author. */
    set author(value) {
        this.#pdfInstructions.author = value;
    }

    /** Gets the title. */
    get title() {
        return this.#pdfInstructions.title;
    }

    /** sets the title.*/
    set title(value) {
        this.#pdfInstructions.title = value;
    }

    /** Gets the subject. */
    get subject() {
        return this.#pdfInstructions.subject;
    }

    /** sets the subject. */
    set subject(value) {
        this.#pdfInstructions.subject = value;
    }

    /** Gets the creator. */
    get creator() {
        return this.#pdfInstructions.creator;
    }

    /** sets the creator. */
    set creator(value) {
        this.#pdfInstructions.creator = value;
    }

    /** Gets the keywords. */
    get keywords() {
        return this.#pdfInstructions.keywords;
    }

    /** sets the keywords. */
    set keywords(value) {
        this.#pdfInstructions.keywords = value;
    }

    /** Gets the security. */
    get security() {
        return this.#pdfInstructions.security;
    }

    /** sets the security. */
    set security(value) {
        this.#pdfInstructions.security = value;
    }

    /** Gets the value indicating whether to flatten all form fields. */
    get flattenAllFormFields() {
        return this.#pdfInstructions.flattenAllFormFields;
    }

    /** sets the value indicating whether to flatten all form fields. */
    set flattenAllFormFields(value) {
        this.#pdfInstructions.flattenAllFormFields = value;
    }

    /** Gets the value indicating whether to retain signature form field. */
    get retainSignatureFormFields() {
        return this.#pdfInstructions.retainSignatureFormFields;
    }

    /** sets the value indicating whether to retain signature form field. */
    set retainSignatureFormFields(value) {
        this.#pdfInstructions.retainSignatureFormFields = value;
    }

    /**Gets the inputs. */
    get inputs() {
        return this.#pdfInstructions.inputs;
    }

    /** Gets the templates. */
    get templates() {
        return this.#pdfInstructions.templates;
    }

    /** Gets the fonts. */
    get fonts() {
        return this.#pdfInstructions.fonts;
    }

    /** Gets the formFields. */
    get formFields() {
        return this.#pdfInstructions.formFields;
    }

    /** Gets the outlines. */
    get outlines() {
        return this.#pdfInstructions.outlines;
    }

    /**
     * Returns a `PdfInput` object containing the input pdf.
     * @param {resource | cloudResourcePath} value The resource of type `PdfResource` | The resource path in cloud resource manager.
     * @param {MergeOptions} options The merge options for the pdf.
     * @returns PdfInput
     */
    addPdf(value, options = null) {
        var input = new PdfInput(value, options);
        this.inputs.push(input);
        return input;
    }

    /**
     * Returns a `ImageInput` object containing the input pdf.
     * @param {string | PdfResource} value The resource of type `ImageResource` | The resource path in cloud resource manager.
     * @returns ImageInput
     */
    addImage(value) {
        var input = new ImageInput(value);
        this.inputs.push(input);
        return input;
    }

    /**
     * Returns a `DlexInput` object containing the input pdf.
     * @param {DlexResource} value The dlex resource of type `DlexResource` | The resource path in cloud resource manager.
     * @param {LayoutDataResource} value1 The layout data resource of type `LayoutDataResource`
     * @returns DlexInput
     */
    addDlex(value, value1) {
        var input = new DlexInput(value, value1);
        this.inputs.push(input);
        return input;
    }

    /**
     * Returns a `PageInput` object containing the input pdf.
     * @param {number} pageWidth The width of the page.
     * @param {number} pageHeight The height of the page.
     * @returns PageInput 
     */
    addPage(pageWidth, pageHeight) {
        var input = new PageInput(pageWidth, pageHeight);
        this.inputs.push(input);
        return input;
    }

    /**
     * Process to create pdf.
     * @returns A Promise of PdfResponse callback.
     */
    async process() {
        this.#form = new FormData();
        var finalResources = [];
        this.#pdfInstructions.inputs.forEach((input) => {
            if (input._Type == inputType.page) {
                input.elements.forEach((element) => {
                    if (element.resource != null) {
                        finalResources.push(element.resource);
                    }
                    if (element.textFont != null) {
                        this.#pdfInstructions.fonts.push(element.textFont);
                    }
                });
            }
            input._Resources.forEach((resource) => {
                finalResources.push(resource);
            });
            if (input.template) {
                this.#pdfInstructions.templates.push(input.template);
                if (this.loggingEnabled) {
                    console.log(this.#pdfInstructions);
                }
                if (input.template.elements != null && input.template.elements.length > 0) {
                    input.template.elements.forEach((element) => {
                        if (element.resource != null)
                            finalResources.push(element.resource);
                        if (element.textFont != null)
                            this.#pdfInstructions.fonts.push(element.textFont);

                    });

                }
            }
        });

        if (this.loggingEnabled) {
            console.log(JSON.stringify(this.#pdfInstructions));
        }
        this.#form.append('Instructions', JSON.stringify(this.#pdfInstructions), "Instructions.json");
        finalResources.forEach((resource) => {
            if (resource.type == resourceType.layoutData) {
                this.#form.append('Resource', resource.data, resource.layoutDataResourceName);
            }
            this.#form.append('Resource', resource.data, resource.resourceName);
        });
        return await this._postForm(this.#form, this.endPointName);
    }
    getInstructionsJson() {
        this.#pdfInstructions.inputs.forEach((input) => {
            if (input.type == inputType.page) {
                input.elements.forEach((element) => {
                    if (element.textFont != null) {
                        this.#pdfInstructions.fonts.push(element.textFont);
                    }
                });
            }
            if (input.template != null) {
                this.#pdfInstructions.templates.push(input.template);
                if (this.loggingEnabled) {
                    console.log(this.#pdfInstructions);
                }
                if (input.template.elements != null && input.template.elements.length > 0) {
                    input.template.elements.forEach((element) => {
                        if (element.textFont != null)
                            this.#pdfInstructions.fonts.push(element.textFont);

                    });

                }
            }
        });
        var jsonText = JSON.stringify((this.#pdfInstructions));
        return jsonText;
    }
    toJSON() {
        return {
            outlines: this.outlines,
            formFields: this.formFields,
            fonts: this.fonts,
            templates: this.templates,
            inputs: this.inputs,
            retainSignatureFormFields: this.retainSignatureFormFields,
            flattenAllFormFields: this.flattenAllFormFields,
            instructions: this.instructions,
            author: this.author,
            title: this.title,
            subject: this.subject,
            creator: this.creator,
            keywords: this.keywords,
            security: this.security
        };

    }
}

