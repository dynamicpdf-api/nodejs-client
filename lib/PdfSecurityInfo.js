/**
 * Represents the PDF security info.
 */
export class PdfSecurityInfo {

    constructor(data) {

        this.encryptionTypeString = data.encryptionType || null;

        this.allowEdit = data.allowEdit ?? null;
        this.allowPrint = data.allowPrint ?? null;
        this.allowUpdateAnnotsAndFields = data.allowUpdateAnnotsAndFields ?? null;
        this.allowCopy = data.allowCopy ?? null;
        this.allowHighResolutionPrinting = data.allowHighResolutionPrinting ?? null;
        this.allowDocumentAssembly = data.allowDocumentAssembly ?? null;
        this.allowFormFilling = data.allowFormFilling ?? null;
        this.allowAccessibility = data.allowAccessibility ?? null;

        this.encryptAllExceptMetadata = data.encryptAllExceptMetadata ?? null;
        this.encryptOnlyFileAttachments = data.encryptOnlyFileAttachments ?? null;

        this.hasOwnerPassword = data.hasOwnerPassword ?? false;
        this.hasUserPassword = data.hasUserPassword ?? false;
    }


    get encryptionType() {
        switch (this.encryptionTypeString) {
            case "rc4-40":
                return "RC440";
            case "rc4-128":
                return "RC4128";
            case "aes-128-cbc":
                return "Aes128Cbc";
            case "aes-256-cbc":
                return "Aes256Cbc";
            default:
                return "None";
        }
    }


    toJSON() {
        return {
            encryptionType: this.encryptionTypeString,
            allowEdit: this.allowEdit,
            allowPrint: this.allowPrint,
            allowUpdateAnnotsAndFields: this.allowUpdateAnnotsAndFields,
            allowCopy: this.allowCopy,
            allowHighResolutionPrinting: this.allowHighResolutionPrinting,
            allowDocumentAssembly: this.allowDocumentAssembly,
            allowFormFilling: this.allowFormFilling,
            allowAccessibility: this.allowAccessibility,
            encryptAllExceptMetadata: this.encryptAllExceptMetadata,
            encryptOnlyFileAttachments: this.encryptOnlyFileAttachments,
            hasOwnerPassword: this.hasOwnerPassword,
            hasUserPassword: this.hasUserPassword
        };
    }
}
