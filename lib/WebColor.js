/** Represents an RGB color created using the web hexadecimal convention. */
export class WebColor extends RgbColor {

    /**
     * Initializes a new instance of the `WebColor` class.
     * @param {string} webHexString The hexadecimal string representing the color.
     */
    constructor(webHexString) {
        super();
        super.ColorString = webHexString;
    }
}
