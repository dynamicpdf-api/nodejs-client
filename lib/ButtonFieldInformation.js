/**
 * Represents information of a button field.
 */
export class ButtonFieldInformation {

    /** Gets or Sets the name of the button field.*/
    name;

    /** Gets or sets the type of the button field, ex: RadioButton, CheckBox etc. */
    type;

    /** Gets or sets the value of the button field. */
    value;

    /**Gets or Sets the default value of the button field. */
    defaultValue;

    /**Gets or Sets the export value. These values will be exported when submitting the form.
     * To create a set of mutually exclusive radio buttons
     * (i.e., where only one can be selected at a time),
     * create the fields with the same name but different export values.
     */
    exportValue;

    /** Gets the collection of export value.*/
    exportValues = [];

    toJSON() {
        return {
            name: this.name,
            type: this.type,
            value: this.value,
            defaultValue: this.defaultValue,
            exportValue: this.exportValue,
            exportValues: this.exportValues
        };
    }
}