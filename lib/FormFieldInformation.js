/**
 * Represents the form field information containing the collection 
 * of different types of field information.
 */
export class FormFieldInformation {

    constructor() { }

    /** Gets or sets a collection of `SignatureFieldInformation` */
    signatureFields = [];

    /** Gets or sets a collection of `TextFieldInformation` */
    textFields = [];

    /**  Gets or sets a collection of `ChoiceFieldInformation` . */
    choiceFields = [];

    /** Gets or sets a collection of `ButtonFieldInformation` */
    buttonFields = [];

    /** Gets or sets a collection of `PushButtonInformation` */
    pushButtons = [];

    /** Gets or sets a collection of `MultiSelectListBoxInformation` */
    multiSelectListBoxFields = [];

    toJSON() {
        return {
            signatureFields: this.signatureFields,
            textFields: this.textFields,
            choiceFields: this.choiceFields,
            buttonFields: this.buttonFields,
            pushButtons: this.pushButtons,
            multiSelectListBoxFields: this.multiSelectListBoxFields
        };
    }
}

