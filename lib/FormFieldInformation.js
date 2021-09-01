/**
 * Represents the form field information containing the collection 
 * of different types of field informations.
 */
export class FormFieldInformation {

    constructor() { }

    /** Gets or sets a collection of `SignatureFieldInformation` */
    SignatureFields = [];
    
    /** Gets or sets a collection of `TextFieldInformation` */
    TextFields = [];

    /**  Gets or sets a collection of `ChoiceFieldInformation` . */
    ChoiceFields = [];

    /** Gets or sets a collection of `ButtonFieldInformation` */
    ButtonFields = [];

    /** Gets or sets a collection of `PushButtonInformation` */
    PushButtons = [];
    
    /** Gets or sets a collection of `MultiSelectListBoxInformation` */
    MultiSelectListBoxFields = [];
}

