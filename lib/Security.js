/**Base class from which all security classes are derived. */
export class Security {

    type;

    /**Gets or sets the user password. */
    userPassword;

    /**Gets or sets the owner password. */
    ownerPassword;

    /** Gets or sets if text and images can be copied to the clipboard by the user. */
    allowCopy;

    /** Gets or sets if the document can be edited by the user. */
    allowEdit;

    /** Gets or sets if the document can be printed by the user. */
    allowPrint;

    /**  Gets or sets if annotations and form fields can be added, edited
    * and modified by the user. */
    allowUpdateAnnotationsAndFields;

    /** Gets or sets if accessibility programs should be able to read
    * the documents text and images for the user. */
    allowAccessibility;

    /** Gets or sets if form filling should be allowed by the user. */
    allowFormFilling;

    /** Gets or sets if the document can be printed at a high resolution by the user. */
    allowHighResolutionPrinting;

    /** Gets or sets if the document can be assembled and manipulated by the user. */
    allowDocumentAssembly;


    constructor(userPwd, ownerPwd) {
        this.userPassword = userPwd;
        this.ownerPassword = ownerPwd;
    }


    toJSON() {
        return {
            type: this.type,
            userPassword: this.userPassword,
            ownerPassword: this.ownerPassword,
            allowCopy: this.allowCopy,
            allowEdit: this.allowEdit,
            allowPrint: this.allowPrint,
            allowUpdateAnnotationsAndFields: this.allowUpdateAnnotationsAndFields,
            allowAccessibility: this.allowAccessibility,
            allowFormFilling: this.allowFormFilling,
            allowHighResolutionPrinting: this.allowHighResolutionPrinting,
            allowDocumentAssembly: this.allowDocumentAssembly
        }
    }
}