import { v4 as uuidv4 } from 'uuid';

/** Represents a document template. */
export class Template {

    /** Initializes a new instance of the `Template` class. */
    constructor(id = null) {
        if (id == null) {
            this.id = uuidv4;
        }
        else
            this.id = id;
    }

    /** Gets or sets the id for the template. */
    id;

    /** Gets or sets the elements for the template. */
    elements = [];

    toJSON() {
        return {
            id: this.id,
            elements: this.elements
        }
    }
}