import { Action } from "./Action.js";

/**Represents an outline. */
export class Outline {

    /** Gets or sets the text of the outline. */
    Text;

    color;

    #colorValue;

    /** Gets or sets a value specifying if the outline is expanded. */
    Expanded;

    /** Gets or sets a collection of child outlines. */
    Children = [];

    /** Gets or sets the style of the outline. */
    Style;
    
    #FromInputID;

    /**Gets or sets the Action of the outline. */
    linkTo;

    /**
     * Initializes a new instance of the `Outline` class.
     * @param {PdfInput | string} input The input of type `PdfInput`| text for the outline.
     * @param {Action} action Action of the outline.
     */
    constructor(inputOrText, action = null) {
        if (typeof (inputOrText) === "string") {

            this.Text = inputOrText;
            this.linkTo = action;
        }
        else
            this.#FromInputID = inputOrText.Id;
    }

    /** Gets the Action of the outline.
    */
    get Action() {
        return this.linkTo;
    }

    /** Sets the color of the outline.
    */
    set Action(value) {
        this.linkTo = value;
    }

    /** Gets the color of the outline.
     */
    get Color() {
        this.colorValue;
    }

    /** sets the color of the outline. */
    set Color(value) {
        this.#colorValue = value;
        this.color = this.#colorValue.ColorString;
    }
}