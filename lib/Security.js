/**Base class from which all security classes are derived. */
export class Security {

    Type;

    /**Gets or sets the user password. */
    UserPassword;

    /**Gets or sets the owner password. */
    OwnerPassword;

    /** Gets or sets if text and images can be copied to the clipboard by the user. */
    AllowCopy;

    /** Gets or sets if the document can be edited by the user. */
    AllowEdit;

    /** Gets or sets if the document can be printed by the user. */
    AllowPrint;

    /**  Gets or sets if annotations and form fields can be added, edited
    * and modified by the user. */
    AllowUpdateAnnotationsAndFields;

    /** Gets or sets if accessibility programs should be able to read
    * the documents text and images for the user. */
    AllowAccessibility;

    /** Gets or sets if form filling should be allowed by the user. */
    AllowFormFilling;

    /** Gets or sets if the document can be printed at a high resolution by the user. */
    AllowHighResolutionPrinting;

    /** Gets or sets if the document can be assembled and manipulated by the user. */
    AllowDocumentAssembly;


    constructor(userPwd, ownerPwd) {
        this.UserPassword = userPwd;
        this.OwnerPassword = ownerPwd;
    }


    toJSON() {
        return {
            type: this.Type,
            userPassword: this.UserPassword,
            ownerPassword: this.OwnerPassword,
            allowCopy: this.AllowCopy,
            allowEdit: this.AllowEdit,
            allowPrint: this.AllowPrint,
            allowUpdateAnnotationsAndFields: this.AllowUpdateAnnotationsAndFields,
            allowAccessibility: this.AllowAccessibility,
            allowFormFilling: this.AllowFormFilling,
            allowHighResolutionPrinting: this.AllowHighResolutionPrinting,
            allowDocumentAssembly: this.allowDocumentAssembly
        }
    }
}