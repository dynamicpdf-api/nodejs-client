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
        this.Name = name;
        this.Value = value;
    }

    /** Gets or sets name of the form field. */
    Name;

    /** Gets or sets value of the form field. */
    Value;

    /** Gets or sets a boolean indicating whether to flatten the form field. */
    Flatten;

    /** Gets or sets a boolean indicating whether to remove the form field. */
    Remove;

    toJSON() {
        return {
            name: this.Name,
            value: this.Value,
            flatten: this.Flatten,
            remove: this.Remove
        };
    }
}