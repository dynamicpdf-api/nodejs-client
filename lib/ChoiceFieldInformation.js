/**
 * Represents the information of a choice field in interactive forms.
 * A choice field contains several text items,
 * one or more of which may be selected as the field value.
 */
export class ChoiceFieldInformation {
    
    /** Gets or Sets the name of the choice field. */
    Name;
   
    /** Gets or sets the `ChoiceFieldType`. ex: ListBox, ComboBox etc.*/
    Type;
   
    /** Gets or sets the value of the choice field. */
    Value;
   
    /** Gets or Sets the default value of the choice field. */
    DefaultValue;
   
    /** Gets or Sets the export value. */
    ExportValue;
   
    /** Gets the collection of items. */
    Items = [];
   
    /** Gets the collection of export values of the items present in the choice field. */
    ItemExportValues = [];
}