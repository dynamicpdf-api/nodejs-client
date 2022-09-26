import { inputType } from "./InputType.js";
import { Input } from "./Input.js";
import fs from 'fs';
import path from 'path';
/**
 * Represents a HTML input.
 */
export class HtmlInput extends Input {
    htmlString;
    htmlResourceName;
    basepath;
    /**
    * Initializes a new instance of the `HTMLInput` class.
    * @param { string | resource } input The html embeded as a string. | The HTML file name uploaded along with request.
    * @param { string } BasePath path for the html input..
    */
    constructor(input) {
        super();
        if (fs.existsSync(input)) {
            this.htmlResourceName = input;
        }
        else {
            this.htmlString = input;
        }
        this._Type = inputType.html;
    }

    get HtmlResourceName() {
        return this.htmlResourceName;
    }
    #getResourceName() {
        if (this.htmlResourceName != undefined)
            return path.basename(this.htmlResourceName);
        return this.htmlResourceName;
    }

    toJSON() {
        return {
            htmlString: this.htmlString,
            htmlResourceName: this.#getResourceName(),
        };
    }
}