import { Color } from "./Color.js";
export class Grayscale extends Color {
    grayLevel;
    constructor(value) {
        super();
        if (typeof (value) === "string") {
            this.ColorString = value;
        } else {
            this.grayLevel = value;
        }
    }
    get Black() { return new Grayscale(0); }
    get White() { return new Grayscale(1); }
    get ColorString() {
        if (this.colorString != null)
            return this.colorString;
        else
            return "gray(" + this.grayLevel.toString() + ")";
    }
    set ColorString(value) {
        this.colorString = value;
    }
}
