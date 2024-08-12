import { ColorFormat } from "./ColorFormat.js";
import { colorFormatType } from "./ColorFormatType.js";

export class BmpColorFormat extends ColorFormat {
    constructor(type) {
        super(type !== colorFormatType.Monochrome ? colorFormatType.Rgb : type);
    }
}