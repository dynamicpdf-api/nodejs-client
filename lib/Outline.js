import { Action } from "./Action.js";
import { MergeOptions } from "./MergeOptions.js";
import { OutlineList } from "./OutlineList.js";

/**Represents an outline. */
export class Outline {

    #colorValue;

    #child;

    #FromInputID;

    #color;

    #colorName;

    #children;


    /** Gets or sets the text of the outline. */
    Text;

    /** Gets or sets a value specifying if the outline is expanded. */
    Expanded;

    /** Gets or sets the style of the outline. */
    Style;

    /**Gets or sets the Action of the outline. */
    #linkTo;

    constructor(pdfInput, action = null) {
        if (typeof (pdfInput) === "string") {

            this.Text = pdfInput;
            this.linkTo = action;
        }
        else {
            this.#FromInputID = pdfInput.Id;
            if (pdfInput.MergeOptions == null) {
                pdfInput.MergeOptions = new MergeOptions();
            }
            else {
                pdfInput.MergeOptions.Outlines = false;
            }
        }

    }

    /** Gets the Action of the outline. */
    get Action() {
        return this.#linkTo;
    }

    /** Sets the color of the outline. */
    set Action(value) {
        this.#linkTo = value;
    }

    /** Gets the color of the outline. */
    get Color() {
        this.#colorValue;
    }

    /** sets the color of the outline. */
    set Color(value) {
        this.#color = value;
        this.#colorName = this.#color.ColorString;
    }

    /** Gets a collection of child outlines. */
    get GetChildren() {
        if (this.#children != null)
            return this.#children.Outlines;
 
        }

    get Children() {
        if (this.#children == null)
            this.#children = new OutlineList();
        return this.#children;
    }

    toJSON() {
        return {
            color: this.#colorName,
            children: this.GetChildren,
            expanded: this.Expanded,
            style: this.Style,
            text: this.Text,
            fromInputID: this.#FromInputID,
            linkTo: this.#linkTo
        };
    }
}
