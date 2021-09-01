import { v4 as uuidv4 } from 'uuid';

/** Represents a document template. */
export class Template {

    /** Initializes a new instance of the `Template` class. */
    constructor(id = null) {
        if (id == null) {
            this.Id = uuidv4;
        }
        this.Id = id;
    }

    /** Gets or sets the id for the template. */
    Id;

    /** Gets or sets the elements for the template. */
    Elements = [];
}