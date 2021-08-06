import { v4 as uuidv4 } from 'uuid';
export class Template {
    constructor(id = null) {
        if (id == null) {
            this.Id = uuidv4;
        }
        this.Id = id;
    }
    Id;
    Elements = [];
}