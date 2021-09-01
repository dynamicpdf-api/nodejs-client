import { Color } from "./Color.js";

/**
 * Represents a grayscale color.
 */
export class Grayscale extends Color {
    #grayLevel;
    #colorString;

    /**
     * Initializes a new instance of the `Grayscale` class.
     * @param {Number} grayLevel The gray level for the color.
     */
    constructor(grayLevel) {
        super();
        if (typeof (grayLevel) === "string") {
            this.ColorString = grayLevel;
        } else {
            this.#grayLevel = grayLevel;
        }
    }

    /** Gets the color black. */
    get Black() { return new Grayscale(0); }
    
    /** Gets the color white. */
    get White() { return new Grayscale(1); }

    get ColorString() {
        if (this.#colorString != null)
            return this.#colorString;
        else
            return "gray(" + this.#grayLevel.toString() + ")";
    }
    
    set ColorString(value) {
        this.#colorString = value;
    }
}
