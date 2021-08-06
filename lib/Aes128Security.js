import { Security } from "./Security.js";
import { SecurityType } from "./SecurityType.js";

export class Aes128Security extends Security {
    constructor(userPassword, ownerPassword) {
        super(userPassword, ownerPassword);
        this.Type = SecurityType.Aes128;
    }
    DocumentComponents;
}