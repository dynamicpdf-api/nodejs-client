/**
 * Base class representing a color.
 */
export class Color {

    constructor() { }

    #colorString;
    
    get ColorString() {
        return this.#colorString;
    }

    set ColorString(value) {
        this.#colorString = value;
    }
}
