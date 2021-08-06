import { Action } from "./Action.js";
export class UrlAction extends Action {
    Url;
    constructor(url) {
        super();
        this.Url = url;
    }
}