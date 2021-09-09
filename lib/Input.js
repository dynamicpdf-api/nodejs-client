import { v4 as uuidv4 } from 'uuid';

/** Represents the base class for inputs. */
export class Input {

    Resources = [];

    /** Gets or sets the resource name. */
    ResourceName;

    /** Gets or sets the id. */
    Id;

    constructor(Resource = "") {
        if (typeof (Resource) === "string") {
            this.ResourceName = Resource;
        }
        else {
            this.Resources.push(Resource);
            this.ResourceName = Resource.resourceName;
        }
        this.Id = uuidv4();
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

    Type;
    template;
    TemplateId;
};