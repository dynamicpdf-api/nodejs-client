export class FormField {
    constructor(name, value = null) {
        this.Name = name;
        this.Value = value;
    }
    Name;
    Value;
    Flatten;
    Remove;
}