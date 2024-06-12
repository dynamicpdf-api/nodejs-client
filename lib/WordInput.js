import { inputType } from "./InputType.js";
import { PageSize } from "./PageSize.js";
import { Orientation } from "./Orientation.js";
import { ConverterInput } from "./ConverterInput.js";

/** Represents a Word input. */
export class WordInput extends ConverterInput {

    #textReplace=[];

    /**   Initializes a new instance of the `WordInput` class.
    * @param {WordResource} resource for the PDF pages
    * @param {PageSize} pageSize of the PDF pages
    * @param {Orientation} orientation for the PDF pages
    * @param {number} margins for all four sides
    */
    constructor(resource, pageSize = null, orientation = null, margins = null) {
        super(resource, pageSize, orientation, margins);
       
        this._Type = inputType.word;
    }

    get TextReplace() {
        return this.#textReplace;
    }
    set TextReplace(value) {
        this.#textReplace = value;
    }
 
    toJSON() {
        return {
            topMargin: this.TopMargin,
            leftMargin: this.LeftMargin,
            bottomMargin: this.BottomMargin,
            rightMargin: this.RightMargin,
            pageWidth: this.PageWidth,
            pageHeight: this.PageHeight,
            type: this._Type,
            resourceName: this.resourceName,
            id: this.id,
            textReplace:this.TextReplace
        }
    }
}