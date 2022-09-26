import FormData from 'form-data';
import { Endpoint } from "./Endpoint.js";
import { Html#instructions } from './Html#instructions.js';
import fs from 'fs';
/**
 * Represents a HTML Endpoint.
 */
export class Html extends Endpoint {
    #form;
    #instructions;
    constructor() {
        super();
        this.#instructions = new Html#instructions();
        this.endPointName = "HtmlToPdf";
    }

    /** Gets the Orientation. */
    get Orientation() {
        return this.#instructions.pageOrientation;
    }

    /** sets the Orientation. */
    set Orientation(value) {
        this.#instructions.pageOrientation = value;
    }

    /** Gets the TopMargin. */
    get TopMargin() {
        return this.#instructions.topMargin;
    }

    /** sets the TopMargin. */
    set TopMargin(value) {
        this.#instructions.topMargin = value;
    }

    /** Gets the BottomMargin. */
    get BottomMargin() {
        return this.#instructions.bottomMargin;
    }

    /** sets the BottomMargin. */
    set BottomMargin(value) {
        this.#instructions.bottomMargin = value;
    }

    /** Gets the LeftMargin. */
    get LeftMargin() {
        return this.#instructions.leftMargin;
    }

    /** sets the LeftMargin. */
    set LeftMargin(value) {
        this.#instructions.leftMargin = value;
    }

    /** Gets the RightMargin. */
    get RightMargin() {
        return this.#instructions.rightMargin;
    }

    /** sets the RightMargin. */
    set RightMargin(value) {
        this.#instructions.rightMargin = value;
    }

    /** Gets the PageSize. */
    get PageSize() {
        return this.#instructions.pageSize;
    }

    /** sets the PageSize. */
    set PageSize(value) {
        this.#instructions.pageSize = value;
    }

    /** Gets the BasePath. */
    get BasePath() {
        return this.#instructions.basePath;
    }

    /** sets the BasePath. */
    set BasePath(value) {
        this.#instructions.basePath = value;
    }

    get Inputs() {
        return this.#instructions.input;
    }
    set Inputs(value) {
        this.#instructions.input = value;
    }

    /**
         * Process to create pdf.
         * @returns A Promise of PdfResponse callback.
         */
    async process() {
        this.#form = new FormData();
        this.#form.append('#instructions', JSON.stringify(this.#instructions), "#instructions.json");
        if (this.#instructions.input.HtmlResourceName != null) {
            var filename = this.#instructions.input.HtmlResourceName;
            this.#form.append('Resource', this.getUTFFileData(this.#instructions.input.HtmlResourceName), filename, "text/html");
        }
        return await this._postForm(this.#form, super.endPointName);
    }

    getUTFFileData(filePath) {
        var fileData = fs.readFileSync(filePath);
        var data = Buffer.from(fileData, 'utf-8').toString();
        return data;
    }
};