import { Security } from "./Security.js";
import { securityType } from "./SecurityType.js";

/**
 * Represents AES 256 bit PDF document security.
 * AES 256 bit PDF security is compatible with PDF version 1.5 and higher. 
 */
export class Aes256Security extends Security {

    /** 
     * Gets or sets the `EncryptDocumentComponents`, components of the document to be encrypted.
     * We can encrypt all the PDF content or the content, excluding the metadata.
     */
    documentComponents;

    /**
     * Initializes a new instance of the `Aes256Security` class by 
     * taking the owner and user passwords as parameters to create PDF.
     * @param {string} userPassword The owner password to open the document.
     * @param {string} ownerPassword The user password to open the document.
     */
    constructor(userPassword, ownerPassword) {
        super(userPassword, ownerPassword);
        this.type = securityType.aes256;
    }
    toJSON() {
        return {
            documentComponents: this.documentComponents,
            type: this.type,
            userPassword: this.userPassword,
            ownerPassword: this.ownerPassword
        };
    }
}