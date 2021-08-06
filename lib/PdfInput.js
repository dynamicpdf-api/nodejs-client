import { InputType } from "./InputType.js";
import { Input } from "./Input.js";
export class PdfInput extends Input {
    MergeOptions;
    StartPage;
    PageCount;
    Type = InputType.Pdf;
    constructor(resourceOrString, mergeOptions = null) {
        super(resourceOrString);
        this.MergeOptions = mergeOptions;
    }
}