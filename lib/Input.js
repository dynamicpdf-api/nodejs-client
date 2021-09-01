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
    
    /**Gets or sets the id. */
    Id

    Type;
    template;
    TemplateId;
};