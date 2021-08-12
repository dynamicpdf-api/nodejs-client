import FormData from 'form-data';
import http from 'https';
import { PdfResponse } from './PdfResponse.js';
import { Endpoint } from './Endpoint.js';
import { PdfInstructions } from './PdfInstructions.js';
import { URL } from 'url';
import { InputType } from './InputType.js';
import { PdfInput } from './PdfInput.js';
import { ResourceType } from './ResourceType.js';
import { Resource } from './Resource.js';
import { PageInput } from './PageInput.js';
import { ImageInput } from './ImageInput.js';
import { DlexInput } from './DlexInput.js';
export class Pdf extends Endpoint {
    #pdfInstructions;
    #form;
    constructor() {
        super();
        this.#pdfInstructions = new PdfInstructions();
    }
    get Instructions() {
        return this.#pdfInstructions;
    }
    get EndpointName() {
        return "pdf";
    }
    Resources;
    get Author() {
        this.#pdfInstructions.Author;
    }
    set Author(value) {
        this.#pdfInstructions.Author = value;
    }
    get Title() {
        return this.#pdfInstructions.Title;
    }
    set Title(value) {
        this.#pdfInstructions.Title = value;
    }
    get Subject() {
        return this.#pdfInstructions.Subject;
    }
    set Subject(value) {
        this.#pdfInstructions.Subject = value;
    }
    get Creator() {
        return this.#pdfInstructions.Creator;
    }
    set Creator(value) {
        this.#pdfInstructions.Creater = value;
    }
    get Keywords() {
        return this.#pdfInstructions.Keywords;
    }
    set Keywords(value) {
        this.#pdfInstructions.Keywords = value;
    }
    get Security() {
        return this.#pdfInstructions.Security;
    }
    set Security(value) {
        this.#pdfInstructions.Security = value;
    }
    get FlattenAllFormFields() {
        return this.#pdfInstructions.FlattenAllFormFields;
    }
    set FlattenAllFormFields(value) {
        this.#pdfInstructions.FlattenAllFormFields = value;
    }
    get RetainSignatureFormFields() {
        return this.#pdfInstructions.RetainSignatureFormFields;
    }
    set RetainSignatureFormFields(value) {
        this.#pdfInstructions.RetainSignatureFormFields = value;
    }
    AddPdf(value, options = null) {
        var input = new PdfInput(value, options);
        this.Inputs.push(input);
        return input;
    }
    AddImage(value) {
        var input = new ImageInput(value);
        this.Inputs.push(input);
        return input;
    }
    AddDlex(value, value1) {
        var input = new DlexInput(value, value1);
        this.Inputs.push(input);
        return input;
    }
    AddPage(pageWidth, pageHeight) {
        var input = new PageInput(pageWidth, pageHeight);
        this.Inputs.push(input);
        return input;
    }
    get Inputs() {
        return this.#pdfInstructions.Inputs;
    }
    get Templates() {
        return this.#pdfInstructions.Templates;
    }
    get Fonts() {
        return this.#pdfInstructions.Fonts;
    }
    get FormFields() {
        return this.#pdfInstructions.FormFields;
    }
    get Outlines() {
        return this.#pdfInstructions.Outlines;
    }
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
        return await this.postHttpRequest(this.#form);
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
