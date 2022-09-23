import { inputType } from "./InputType.js";
import { Input } from "./Input.js";
import fs from 'fs';
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
    constructor(input, basepath = null) {
        super();
        if(fs.existsSync(input)){
            this.htmlResourceName=input;
        }
        else{
            this.htmlString=input;
        }
        if(basepath!=null)        {
            this.basepath=basepath;
        }
        this._Type = inputType.html;
    }

    set HtmlResourceName(htmlResourceName) {
        this.htmlResourceName = htmlResourceName;
    }

    get HtmlResourceName() {
        return this.htmlResourceName;
    }

    toJSON() {
        return {
            htmlString: this.htmlString,
            htmlResourceName: this.htmlResourceName,
            basePath:this.basepath,
        };
    }
}