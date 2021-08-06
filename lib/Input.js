export class Input {
    Resources = [];
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
    set Template(template) {
        this.template = template;
        this.TemplateId = template.Id;
    }
    get Template() {
        return this.template;
    }
    Type;
    template;
    TemplateId;
};