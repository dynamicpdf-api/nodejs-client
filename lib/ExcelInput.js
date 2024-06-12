import { inputType } from "./InputType.js";
import { PageSize } from "./PageSize.js";
import { Orientation } from "./Orientation.js";
import { ConverterInput } from "./ConverterInput.js";

/** Represents a Excel input. */
export class ExcelInput extends ConverterInput {
  
    /**   Initializes a new instance of the `ExcelInput` class.
    * @param {ExcelResource} resource for the PDF pages
    * @param {PageSize} pageSize of the PDF pages
    * @param {PageOrientation} orientation for the PDF pages
    * @param {number} margins for all four sides
    */
    constructor(resource, pageSize = null, orientation = null, margins = null) {
        super(resource, pageSize, orientation, margins);
       
        this._Type = inputType.excel;
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
            id: this.id
        }
    }
}