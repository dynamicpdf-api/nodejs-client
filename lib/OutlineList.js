import { Action } from "./Action.js";
import { GoToAction } from "./GoToAction.js";
import { Input } from "./Input.js";
import { Outline } from "./Outline.js";
import { PageZoom } from "./PageZoom.js";
import { UrlAction } from "./UrlAction.js";

/**Represents an outlineList. */
export class OutlineList {
    outlines;
    constructor() {
        this.outlines = [];
    }

    /**
     * Adds an `Outline` object to the outline list.
     * 
     * @param {string} text Text of the outline.
     * @param {string |Input} input URL the action launches.| Any of the `ImageInput`, `DlexInput`, `PdfInput`,  
     * @param {*} pageOffset Page number to navigate.
     * @param {*} pageZoom to display the destination.
     * @returns 
     */
    Add(text, input, pageOffset = 0, pageZoom = PageZoom.FitPage) {
        var outline;
        if (input == undefined) {
            outline = new Outline(text);
        }
        else if (input != undefined && typeof (input) == 'string') {
            outline = new Outline(text, new UrlAction(input));
        }
        else {
            var linkTo = new GoToAction(input);
            linkTo.PageOffset = pageOffset;
            linkTo.PageZoom = pageZoom;
            this.outline = new Outline(text, linkTo);
        }
        this.outlines.push(outline);
        return outline;
    }

    AddPdfOutlines(pdfInput) {
        this.outlines.push(new Outline(pdfInput));
    }

    get Outlines() {
        return this.outlines;
    }
}