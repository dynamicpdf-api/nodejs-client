import { Action } from "./Action.js";
import { PageZoom } from "./PageZoom.js";
export class GoToAction extends Action {
    #InputID;
    PageOffset;
    PageZoom;
    #Input;
    constructor(input, pageOffset = 0, pageZoom = PageZoom.FitPage) {
        super();
        this.#Input = input;
        this.#InputID = input.Id;
        this.PageOffset = pageOffset;
        this.PageZoom = pageZoom;
    }
}