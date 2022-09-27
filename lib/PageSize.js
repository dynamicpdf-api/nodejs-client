/**
 * Represents a pdf PageSize.
 */
export class PageSize {
    #width;
    #height;
    #pageSizeName;
    /**
     * Initializes a new instance of the `PdfInput` class.
     * @param { string | int } pageSizeName The pageSize name. | The page width.
     * @param { int } BasePath The page Height.
     */
    constructor(value = undefined, height = undefined) {
        if (typeof value === 'string') {
            this.#pageSizeName = value;
        }
        else {
            this.#height = height;
            this.#width = value;
        }
    }
    /** Gets the Width. */
    get Width() {
        return this.#width;
    }

    /** sets the keywords. */
    set Width(value) {
        this.#width = value;
    }

    /** Gets the keywords. */
    get Height() {
        return this.#height;
    }

    /** sets the keywords. */
    set Height(value) {
        this.#height = value;
    }

    /** Gets the keywords. */
    get Name() {
        return this.#pageSizeName;
    }

    /** sets the keywords. */
    set Name(value) {
        this.#pageSizeName = value;
    }

    toJSON() {
        return {
            width: this.#width,
            height: this.#height,
            name: this.#pageSizeName
        };
    }

};