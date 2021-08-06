export class Security {
    UserPassword;
    OwnerPassword;
    constructor(userPwd, ownerPwd) {
        this.UserPassword = userPwd;
        this.OwnerPassword = ownerPwd;
    }
    Type;
    AllowCopy;
    AllowEdit;
    AllowPrint;
    AllowUpdateAnnotsAndFields;
    AllowAccessibility;
    AllowFormFilling;
    AllowHighResolutionPrinting;
    AllowDocumentAssembly;
}