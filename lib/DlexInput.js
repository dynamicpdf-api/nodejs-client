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
        else if (typeof (resource) !== "string" && typeof (layoutData) !== "string") //if DlexResource and layoutdataresource are passed
        {
            this.ResourceName = resource.resourceName;
            this.LayoutDataResourceName = layoutData.layoutDataResourceName;
            this.Resources.push(resource);
            this.Resources.push(layoutData);
        }
        else //if inputpath and layoutdataresource are passed
        {
            this.ResourceName = resource;
            this.LayoutDataResourceName = layoutData.layoutDataResourceName;
            this.Resources.push(layoutData);
        }
    }
}