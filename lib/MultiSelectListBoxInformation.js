/** Represents information of a MultiSelectListBox. */
export class MultiSelectListBoxInformation {

    /**Gets or Sets the name of a MultiSelectListBox. */
    Name;

    /** Gets or sets a collection of values of the MultiSelectListBox. */
    Values = [];

    /** Gets or sets a collection of default values of the MultiSelectListBox. */
    DefaultValues = [];

    /** Gets or sets a collection of export values of the MultiSelectListBox. */
    ExportValues = [];

    /** Gets or sets a collection of items of the MultiSelectListBox. */
    Items = [];

    /** Gets or sets a collection of export values of the MultiSelectListBox. */
    ItemsExportValues = [];

    toJSON() {
        return {
            name: this.Name,
            values: this.Values,
            defaultValues: this.DefaultValues,
            exportValues: this.ExportValues,
            items: this.Items,
            itemsExportValues: this.ItemsExportValues
        };
    }
}