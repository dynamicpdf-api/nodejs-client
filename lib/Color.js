/**
 * Base class representing a color.
 */
export class Color {

    #colorString;

    get ColorString() {
        return this.#colorString;
    }

    set ColorString(value) {
        this.#colorString = value;
    }

    constructor() { }

}
