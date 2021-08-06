import { InputType } from "./InputType.js";
import { Input } from "./Input.js";
import { Align } from "./Align.js";
import { VAlign } from "./VAlign.js";
export class ImageInput extends Input {
    constructor(resourceOrString) {
        super(resourceOrString);
    }
    Type = InputType.Image;
    ScaleX;
    ScaleY;
    TopMargin;
    LeftMargin;
    BottomMargin;
    RightMargin;
    PageWidth;
    PageHeight;
    ExpandToFit;
    ShrinkToFit;
    Align = Align.Center;
    VAlign = VAlign.Center;
    StartPage;
    PageCount;
}