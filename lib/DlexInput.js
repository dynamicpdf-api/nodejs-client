import { Input } from "./Input.js";
import { InputType } from "./InputType.js";
export class DlexInput extends Input {
    LayoutDataResourceName;
    Type = InputType.Dlex;
    constructor(resource, layoutData) {
        super();
        if (typeof (resource) === "string" && typeof (layoutData) === "string") {
            this.ResourceName = resource;
            this.LayoutDataResourceName = layoutData;
        }
        else if (typeof (resource) !== "string" && typeof (layoutData) !== "string") {
            this.ResourceName = resource.resourceName;
            this.LayoutDataResourceName = layoutData.LayoutDataResourceName;
            this.Resources.push(resource);
            this.Resources.push(layoutData);
        }
        else {
            this.ResourceName = resource;
            this.LayoutDataResourceName = layoutData.LayoutDataResourceName;
            this.Resources.push(layoutData);
        }
    }
}