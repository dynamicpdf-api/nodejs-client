import { Action } from "./Action.js";
import { GoToAction } from "./GoToAction.js";
import { Input } from "./Input.js";
import { Outline } from "./Outline.js";
import { pageZoom } from "./PageZoom.js";
import { UrlAction } from "./UrlAction.js";

/**Represents an outlineList. */
export class OutlineList {

    #outlines;

    constructor() {
        this.#outlines = [];
    }

    get outlines() {
        return this.#outlines;
    }

    /**
     * Adds an `Outline` object to the outline list.
     * 
     * @param {string} text Text of the outline.
     * @param {string |Input} input URL the action launches.| Any of the `ImageInput`, `DlexInput`, `PdfInput`,  
     * @param {*} pgOffset Page number to navigate.
     * @param {*} pgZoom Page Zoom to display the destination.
     * @returns outline
     */
    add(text, input, pgOffset = 0, pgZoom = pageZoom.fitPage) {
        var outline;
        if (typeof (text) == 'string' && input == undefined) {
            outline = new Outline(text);
        }
        else if (input != undefined && typeof (input) == 'string') {
            outline = new Outline(text, new UrlAction(input));
        }
        else {
            var linkTo = new GoToAction(input);
            linkTo.pageOffset = pgOffset;
            linkTo.pageZoom = pgZoom;
            outline = new Outline(text, linkTo);
        }
        this.#outlines.push(outline);
        return outline;
    }

    addPdfOutlines(pdfInput) {
        this.#outlines.push(new Outline(pdfInput));
    }
    toJSON() {
        return {
            outlines: this.outlines
        }
    }
}