/**
 * Base class representing a color.
 */
export class Color {

    #colorString;

    get colorString() {
        return this.#colorString;
    }

    set colorString(value) {
        this.#colorString = value;
    }

    constructor() { }

}
