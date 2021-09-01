import { Color } from './Color.js';

/** Represents a CMYK color. */
export class CmykColor extends Color {
    #cyan = 0;
    #magenta = 0;
    #yellow = 0;
    #black = 0;

    /**
     * Initializes a new instance of the "CmykColor"
     * @param {number} cyan The cyan intensity.
     * @param {number} magenta The magenta intensity.
     * @param {number} yellow The yellow intensity.
     * @param {number} black The black intensity.     *
     */
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

    /** Gets the color black. */
    static get Black() { return new CmykColor(1, 1, 1, 1); }

    /** Gets the color white. */
    static get White() { return new CmykColor(0, 0, 0, 0); }

    get ColorString() {
        if (super.ColorString != null)
            return Super.ColorString;
        else
            return "cmyk(" + this.#cyan.toString() + "," + this.#magenta.toString() + "," + this.#yellow.toString() + "," + this.#black.toString() + ")";
    }

    set ColorString(value) {
        Super.ColorString = value;
    }
}
