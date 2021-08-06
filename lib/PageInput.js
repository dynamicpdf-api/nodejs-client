import { InputType } from "./InputType.js";
import { Input } from "./Input.js";
import { Element } from "./elements/Element.js";
export class PageInput extends Input {
    constructor(pageWidth, pageHeight) {
        super();
        this.PageWidth = pageWidth;
        this.PageHeight = pageHeight;
    }
    PageHeight;
    PageWidth;
    Type = InputType.Page;
    Elements = [];
}