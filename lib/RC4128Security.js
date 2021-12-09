import { Security } from "./Security.js";
import { securityType } from "./SecurityType.js";

/**
 * Represents RC4 128 bit PDF document security.
 * RC4 128 bit PDF security, with UseCryptFilter property set to false is compatible with PDF version 1.4 or higher and can be read
 * with Adobe Acrobat Reader version 5 or higher. By default UseCryptFilter property is false. RC4 128 bit PDF security with crypt filter 
 * is compatible with PDF version 1.5 or higher and can be read with Adobe Acrobat Reader version 6 and higher. 
 * Older readers will not be able to read document encrypted with this security.
 */
export class RC4128Security extends Security {

    /** Gets or sets the documents components to be encrypted. */
    encryptMetadata;

    /**
     * Initializes a new instance of the `RC4128Security` class.
     * @param {string} userPassword The owner password to open the document.
     * @param {string} ownerPassword The user password to open the document.
     */
    constructor(userPassword, ownerPassword) {
        super(userPassword, ownerPassword);
        this.type = securityType.rc4128;
    }
    
    toJSON() {
        return {
            encryptMetadata: this.encryptMetadata,
            type: this.type,
            userPassword: this.userPassword,
            ownerPassword: this.ownerPassword
        };
    }
}