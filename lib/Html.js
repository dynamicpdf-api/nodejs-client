import FormData from 'form-data';
import { Endpoint } from "./Endpoint.js";
import { HtmlInstructions } from './HtmlInstructions.js';
import fs from 'fs';
/**
 * Represents a HTML Endpoint.
 */
export class Html extends Endpoint {
    #form;
    #instructions;
    constructor() {
        super();
        this.#instructions=new HtmlInstructions();
        this.endPointName = "HtmlToPdf";
    }

    /** Gets the Orientation. */
    get Orientation() {
        return this.#instructions.orientation;
    }

    /** sets the Orientation. */
    set Orientation(value) {
        this.#instructions.orientation = value;
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

    get Inputs(){
        return this.#instructions.input;
    }
    set Inputs(value){
        this.#instructions.input =value;
    }
    /**
         * Process to create pdf.
         * @returns A Promise of PdfResponse callback.
         */
    async process() {
        this.#form = new FormData();
        this.#form.append('Instructions', JSON.stringify(this.#instructions), "Instructions.json");
        var filename=this.#instructions.input.HtmlResourceName;
        if (this.#instructions.input.HtmlResourceName != null)
        this.#form.append('Resource', this.getUTFFileData(this.#instructions.input.HtmlResourceName), filename, "text/html");
        return await this._postForm(this.#form, super.endPointName);
    }

    getUTFFileData(filePath) {
        var fileData = fs.readFileSync(filePath);
        var data= Buffer.from(fileData, 'utf-8').toString();
        return data;
    }
    toJson() {
        return {
            basePath: this.#instructions.basepath,
            pageOrientation: this.#instructions.orientation,
            topMargin: this.#instructions.topMargin,
            leftMargin: this.#instructions.leftMargin,
            rightMargin: this.#instructions.rightMargin,
            bottomMargin: this.#instructions.bottomMargin,
        };
    }
};