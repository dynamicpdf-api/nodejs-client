import { Action } from "./Action.js";

/** Represents an action linking to an external URL. */
export class UrlAction extends Action {

    /** Gets or sets the URL launched by the action. */
    Url;

    /**
     * Initializes a new instance of the `UrlAction` class.
     * @param {string} url URL the action launches.
     */
    constructor(url) {
        super();
        this.Url = url;
    }

    toJSON() {
        return {
            url: this.Url
        }
    }
}