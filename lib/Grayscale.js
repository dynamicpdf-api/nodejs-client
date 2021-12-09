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
            this.colorString = grayLevel;
        } else {
            this.#grayLevel = grayLevel;
        }
    }

    /** Gets the color black. */
    get black() { return new Grayscale(0); }
    
    /** Gets the color white. */
    get white() { return new Grayscale(1); }

    get colorString() {
        if (this.#colorString != null)
            return this.#colorString;
        else
            return "gray(" + this.#grayLevel.toString() + ")";
    }
    
    set colorString(value) {
        this.#colorString = value;
    }
}
