import { v4 as uuidv4 } from 'uuid';

/** Represents the base class for inputs. */
export class Input {

    #template;

    #id;

    _templateId;

    _Resources = [];

    _Type;

    /** Gets or sets the resource name. */
    resourceName;
    
    /** Gets or sets the top margin. */
    topMargin;

    /** Gets or sets the left margin. */
    leftMargin;

    /** Gets or sets the bottom margin. */
    bottomMargin;

    /** Gets or sets the right margin. */
    rightMargin;

    /** Gets or sets the page width. */
    pageWidth;

    /** Gets or sets the page height. */
    pageHeight;

    /** Gets or sets the id. */
    set id(value) {
        this.#id = value;
    }
    get id() {
        if (this.#id == null)
            this.#id = uuidv4();
        return this.#id;
    }

    /** Sets the template. */
    set template(template) {
        this.#template = template;
        this._templateId = template.id;
    }

    /** Gets the template. */
    get template() {
        return this.#template;
    }


    constructor(Resource) {
        if (Resource != undefined) {
            if (typeof (Resource) === "string") {
                this.resourceName = Resource;
            }
            else {
                this._Resources.push(Resource);
                this.resourceName = Resource.resourceName;
            }
        }
    }


    toJSON() {
        return {
            id: this.id,
            type: this._Type,
            templateId: this._templateId,
            resourceName: this.resourceName
        };
    }
}