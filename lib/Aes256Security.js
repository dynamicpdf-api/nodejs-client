import { Security } from "./Security.js";
import { SecurityType } from "./SecurityType.js";

export class Aes256Security extends Security {
    constructor(userPassword, ownerPassword) {
        super(userPassword, ownerPassword);
        this.Type = SecurityType.Aes256;
    }
    DocumentComponents;
}