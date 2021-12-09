/** 
 *Represents a form field in the PDF document.
 */
export class FormField {

    /**
     *  Initializes a new instance of the `FormField` class 
     * using the name of the form field as a parameter.
     * @param {string} name The name of the form field.
     * @param {string} value The value of the form field.
     */
    constructor(name, value = null) {
        this.name = name;
        this.value = value;
    }

    /** Gets or sets name of the form field. */
    name;

    /** Gets or sets value of the form field. */
    value;

    /** Gets or sets a boolean indicating whether to flatten the form field. */
    flatten;

    /** Gets or sets a boolean indicating whether to remove the form field. */
    remove;

    toJSON() {
        return {
            name: this.name,
            value: this.value,
            flatten: this.flatten,
            remove: this.remove
        };
    }
}