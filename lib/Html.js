import FormData from 'form-data';
import { Endpoint } from "./Endpoint.js";
import { HtmlInstructions } from './Htmlinstructions.js';
/**
 * Represents a HTML Endpoint.
 */
export class Html extends Endpoint {
    #form;
    #instructions;
    constructor() {
        super();
        this.#instructions = new HtmlInstructions();
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

    get Input() {
        return this.#instructions.input;
    }
    set Input(value) {
        this.#instructions.input = value;
    }

    /**
         * Process to create pdf.
         * @returns A Promise of PdfResponse callback.
         */
    async process() {
        this.#form = new FormData();
        this.#form.append('instructions', JSON.stringify(this.#instructions), "instructions.json");
        console.log(JSON.stringify(this.#instructions));
        if (this.#instructions.input.HtmlResourceName != null) {
            
            this.#form.append('Resource', this.#instructions.input.HtmlString , this.#instructions.input.HtmlResourceName, "text/html");
        }
        return await this._postForm(this.#form, super.endPointName);
    }
};