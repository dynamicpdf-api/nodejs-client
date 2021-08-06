import { Color } from './Color.js';
export class CmykColor extends Color {
    #cyan = 0;
    #magenta = 0;
    #yellow = 0;
    #black = 0;
    constructor(cyan, magenta, yellow, black) {
        super();
        if (typeof (cyan) === "string") {
            this.ColorString = cyan;
        }
        else {
            if (cyan < 0.0 || cyan > 1.0 || magenta < 0.0 || magenta > 1.0 || yellow < 0.0 || yellow > 1.0 || black < 0.0 || black > 1.0) {
                throw new EndpointException("CMYK values must be from 0.0 to 1.0.");
            }
            this.#cyan = cyan;
            this.#magenta = magenta;
            this.#yellow = yellow;
            this.#black = black;
        }
    }
    static get Black() { return new CmykColor(1, 1, 1, 1); }
    static get White() { return new CmykColor(0, 0, 0, 0); }
    get ColorString() {
        if (this.colorString != null)
            return this.colorString;
        else
            return "cmyk(" + this.#cyan.toString() + "," + this.#magenta.toString() + "," + this.#yellow.toString() + "," + this.#black.toString() + ")";
    }
    set ColorString(value) {
        this.colorString = value;
    }
}
