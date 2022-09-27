import { inputType } from "./InputType.js";
import { Input } from "./Input.js";
import { v4 as uuidv4 } from 'uuid';
/**
 * Represents a HTML input.
 */
export class HtmlInput extends Input {
    htmlString;
    #htmlResourceName;
    /**
    * Initializes a new instance of the `HTMLInput` class.
    * @param { string} input The html embeded as a string. 
    */
    constructor(input) {
        super();
        this.htmlString = input;
        this.#htmlResourceName = uuidv4();
        this._Type = inputType.html;
    }
    get HtmlResourceName() {
        return this.#htmlResourceName;
    }

    get HtmlString() {
        return this.htmlString;
    }

    set HtmlString(value) {
        this.htmlString = value;
    }

    toJSON() {
        return {
            htmlResourceName: this.#htmlResourceName,
        };
    }
}