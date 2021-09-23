import { v4 as uuidv4 } from 'uuid';

/** Represents the base class for inputs. */
export class Input {

    #template;

    #id;

    _templateId;

    _Resources = [];

    _Type;

    /** Gets or sets the resource name. */
    ResourceName;

    /** Gets or sets the id. */
    set Id(value) {
        this.#id = value;
    }
    get Id() {
        if (this.#id == null)
            this.#id = uuidv4();
        return this.#id;
    }

    /** Sets the template. */
    set Template(template) {
        this.#template = template;
        this._templateId = template.Id;
    }

    /** Gets the template. */
    get Template() {
        return this.#template;
    }


    constructor(Resource) {
        if (Resource != undefined) {
            if (typeof (Resource) === "string") {
                this.ResourceName = Resource;
            }
            else {
                this._Resources.push(Resource);
                this.ResourceName = Resource.resourceName;
            }
        }
    }


    toJSON() {
        return {
            id: this.Id,
            type: this._Type,
            templateId: this._templateId,
            resourceName: this.ResourceName
        };
    }
}