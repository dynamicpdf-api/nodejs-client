export class Outline {
    Text;
    #color;
    ColorName
    Expanded;
    Children = [];
    Style;
    FromInputID;
    linkTo;
    FromInputID;
    constructor(inputOrText, action = null) {
        if (typeof (inputOrText) === "string") {

            this.Text = inputOrText;
            this.linkTo = action;
        }
        else
            this.FromInputID = inputOrText.Id;
    }
    get Action() {
        return this.linkTo;
    }
    set Action(value) {
        this.linkTo = value;
    }
    get Color() {
        this.#color;
    }
    set Color(value) {
        this.#color = value;
        this.ColorName = this.#color.ColorString;
    }
}