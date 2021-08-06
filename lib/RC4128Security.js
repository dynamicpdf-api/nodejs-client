import { Security } from "./Security.js";
import { SecurityType } from "./SecurityType.js";

export class RC4128Security extends Security {
    constructor(userPassword, ownerPassword) {
        super(userPassword, ownerPassword);
        this.Type = SecurityType.RC4128;
    }
    EncryptMetadata;
}