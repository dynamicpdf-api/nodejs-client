import { Action } from "./Action.js";
import { MergeOptions } from "./MergeOptions.js";
import { OutlineList } from "./OutlineList.js";

/**Represents an outline. */
export class Outline {

    #child;

    #FromInputID;

    #color;

    #colorName;

    #children;


    /** Gets or sets the text of the outline. */
    text;

    /** Gets or sets a value specifying if the outline is expanded. */
    expanded;

    /** Gets or sets the style of the outline. */
    style;

    /**Gets or sets the Action of the outline. */
    #linkTo;

    constructor(pdfInput, action = null) {
        if (typeof (pdfInput) === "string") {

            this.text = pdfInput;
            this.action = action;
        }
        else {
            this.#FromInputID = pdfInput.id;
            if (pdfInput.mergeOptions == null) {
                pdfInput.mergeOptions = new MergeOptions();
            }
            else {
                pdfInput.mergeOptions.outlines = false;
            }
        }

    }

    /** Gets the Action of the outline. */
    get action() {
        return this.#linkTo;
    }

    /** Sets the color of the outline. */
    set action(value) {
        this.#linkTo = value;
    }

    /** Gets the color of the outline. */
    get color() {
        this.#color;
    }

    /** sets the color of the outline. */
    set color(value) {
        this.#color = value;
        this.#colorName = this.#color.colorString;
    }

    /** Gets a collection of child outlines. */
    /**ToDo Check the validity. */
    get getChildren() {
        if (this.#children != null)
            return this.#children.outlines;
    }

    get children() {
        if (this.#children == null)
            this.#children = new OutlineList();
        return this.#children;
    }

    toJSON() {
        return {
            color: this.#colorName,
            children: this.getChildren,
            expanded: this.expanded,
            style: this.style,
            text: this.text,
            fromInputID: this.#FromInputID,
            linkTo: this.#linkTo
        };
    }
}
