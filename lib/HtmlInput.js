import { inputType } from "./InputType.js";
import { PageSize } from "./PageSize.js";
import { Orientation } from "./Orientation.js";
import { HtmlResource } from "./HtmlResource.js";
import { ConverterInput } from "./ConverterInput.js";

/**
 * Represents a HTML input.
 */
export class HtmlInput extends ConverterInput {
    htmlString;
 
    #basePath;

    /**
     * Initializes a new instance of the `HTMLInput` class.
     * @param {HtmlResource} resource which represents the html code.
     * @param {string} basePath for the html resource. This is the root path for any relative path used in html.
     * @param {PageSize} pageSize of the PDF pages
     * @param {Orientation} orientation for the PDF pages
     * @param {number} margins for all four sides
     */
    constructor(resource, basePath = null, pageSize = null, orientation = null, margins = null) {
        super(resource, pageSize, orientation, margins);

        this._Type = inputType.html;
        this.#basePath = basePath;       
    }

    /** Gets the BasePath. */
    get BasePath() {
        return this.#basePath;
    }

    /** sets the BasePath. */
    set BasePath(value) {
        this.#basePath = value;
    }
 
    toJSON() {
        return {
            basePath: this.#basePath,
            topMargin: this.topMargin,
            leftMargin: this.leftMargin,
            bottomMargin: this.bottomMargin,
            rightMargin: this.rightMargin,
            pageWidth: this.PageWidth,
            pageHeight: this.PageHeight,
            type: this._Type,
            resourceName: this.resourceName,
            id: this.id,
        }
    }
}