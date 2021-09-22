import { v4 as uuidv4 } from 'uuid';

/** Represents the base class for inputs. */
export class Input {

    #template;

    #templateId;

    _Resources = [];
    
    _Type;

    /** Gets or sets the resource name. */
    ResourceName;

    /** Gets or sets the id. */
    Id;

    /** Sets the template. */
    set Template(template) {
        this.#template = template;
        this.#templateId = template.Id;
    }

    /** Gets the template. */
    get Template() {
        return this.#template;
    }


    constructor(Resource = "") {
        if (typeof (Resource) === "string") {
            this.ResourceName = Resource;
        }
        else {
            this._Resources.push(Resource);
            this.ResourceName = Resource.resourceName;
        }
        this.Id = uuidv4();
    }


    toJSON() {
        return {
            id: this.Id,
            type: this._Type,
            templateId: this.#templateId,
            template: this.Template,
            resourceName: this.ResourceName
        };
    }
}