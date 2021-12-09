/** Represents information of a MultiSelectListBox. */
export class MultiSelectListBoxInformation {

    /**Gets or Sets the name of a MultiSelectListBox. */
    name;

    /** Gets or sets a collection of values of the MultiSelectListBox. */
    values = [];

    /** Gets or sets a collection of default values of the MultiSelectListBox. */
    defaultValues = [];

    /** Gets or sets a collection of export values of the MultiSelectListBox. */
    exportValues = [];

    /** Gets or sets a collection of items of the MultiSelectListBox. */
    items = [];

    /** Gets or sets a collection of export values of the MultiSelectListBox. */
    itemsExportValues = [];

    toJSON() {
        return {
            name: this.name,
            values: this.values,
            defaultValues: this.defaultValues,
            exportValues: this.exportValues,
            items: this.items,
            itemsExportValues: this.itemsExportValues
        };
    }
}