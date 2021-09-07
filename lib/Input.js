import { v4 as uuidv4 } from 'uuid';

/** Represents the base class for inputs. */
export class Input {

    Resources = [];

    /** Gets or sets the resource name. */
    ResourceName;

    constructor(Resource = "") {
        if (typeof (Resource) === "string") {
            this.ResourceName = Resource;
        }
        else {
            this.Resources.push(Resource);
            this.ResourceName = Resource.resourceName;
        }
    }

    /** Sets the template. */
    set Template(template) {
        this.template = template;
        this.TemplateId = template.Id;
    }

    /** Gets the template. */
    get Template() {
        return this.template;
    }

    /**Gets the id. */
    get Id() {
        if (this.#id == null) {
            this.#id = uuidv4();
        }
        return this.#id;
    }

    /**sets the id. */
    set Id(value) {
        this.#id = value;
    }

    #id;
    Type;
    template;
    TemplateId;
};