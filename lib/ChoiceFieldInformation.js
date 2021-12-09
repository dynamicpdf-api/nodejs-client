/**
 * Represents the information of a choice field in interactive forms.
 * A choice field contains several text items,
 * one or more of which may be selected as the field value.
 */
export class ChoiceFieldInformation {

    /** Gets or Sets the name of the choice field. */
    name;

    /** Gets or sets the `ChoiceFieldType`. ex: ListBox, ComboBox etc.*/
    type;

    /** Gets or sets the value of the choice field. */
    value;

    /** Gets or Sets the default value of the choice field. */
    defaultValue;

    /** Gets or Sets the export value. */
    exportValue;

    /** Gets the collection of items. */
    items = [];

    /** Gets the collection of export values of the items present in the choice field. */
    itemExportValues = [];

    toJSON() {
        return {
            name: this.name,
            type: this.type,
            value: this.value,
            defaultValue: this.defaultValue,
            exportValue: this.exportValue,
            items: this.items,
            itemExportValues: this.itemExportValues
        };
    }
}