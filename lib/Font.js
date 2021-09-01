import { v4 as uuidv4 } from 'uuid';
import { FontResource } from "./FontResource.js";

/** Represents font. */
export class Font {
    static #timesRoman = null;
    static #timesBold = null;
    static #timesItalic = null;
    static #timesBoldItalic = null;
    static #helvetica = null;
    static #helveticaBold = null;
    static #helveticaOblique = null;
    static #helveticaBoldOblique = null;
    static #courierBold = null;
    static #courierOblique = null;
    static #courierBoldOblique = null;
    static #courier = null;
    static #symbol = null;
    static #zapfDingbats = null;
    resource;
    ResourceName;
    Embed;
    Subset;
    Name;
    font;
    static pathToFontsResourceDirectory = "";
    get Resource() {
        return this.resource;
    }

    /**
     * Initializes a new instance of the `Font` class 
     * using the font name that is present in the cloud resource manager.  
     * @param {string} Resource the coludResourceName
     */
    constructor(Resource, resourceName = null) {
        if (typeof (Resource) !== "string") {
            this.resource = Resource;
            this.ResourceName = resourceName;
            this.Name = uuidv4();
        }
        else {
            this.ResourceName = resourceName;
            this.Name = uuidv4();
        }
    }

    /** Gets the Times Italic core font with Latin 1 encoding. */
    static get TimesItalic() {
        if (this.#timesItalic == null || this.#timesItalic == undefined) {
            this.#timesItalic = new Font();
            this.#timesItalic.Name = "timesItalic";
        }
        return this.#timesItalic;
    }

    /** Gets the Times Roman core font with Latin 1 encoding. */
    static get TimesRoman() {
        if (this.#timesRoman == null || this.#timesRoman == undefined) {
            this.#timesRoman = new Font();
            this.#timesRoman.Name = "timesRoman";
        }
        return this.#timesRoman;
    }

    /** Gets the Times Bold core font with Latin 1 encoding. */
    static get TimesBold() {
        if (this.#timesBold == null || this.#timesBold == undefined) {
            this.#timesBold = new Font();
            this.#timesBold.Name = "timesItalic";
        }
        return this.#timesBold;
    }

    /** Gets the Times Bold Italic core font with Latin 1 encoding. */
    static get TimesBoldItalic() {
        if (this.#timesBoldItalic == null || this.#timesBoldItalic == undefined) {
            this.#timesBoldItalic = new Font();
            this.#timesBoldItalic.Name = "timesBoldItalic";
        }
        return this.#timesBoldItalic;
    }

    /** Gets the Helvetica core font with Latin 1 encoding. */
    static get Helvetica() {
        if (this.#helvetica == null || this.#helvetica == undefined) {
            this.#helvetica = new Font();
            this.#helvetica.Name = "helvetica";
        }
        return this.#helvetica;
    }

    /** Gets the Helvetica Bold core font with Latin 1 encoding. */
    static get HelveticaBold() {
        if (this.#helveticaBold == null || this.#helveticaBold == undefined) {
            this.#helveticaBold = new Font();
            this.#helveticaBold.Name = "helveticaBold";
        }
        return this.#timesItalic;
    }

    /** Gets the Helvetica Oblique core font with Latin 1 encoding. */
    static get HelveticaOblique() {
        if (this.#helveticaOblique == null || this.#helveticaOblique == undefined) {
            this.#helveticaOblique = new Font();
            this.#helveticaOblique.Name = "helveticaOblique";
        }
        return this.#helveticaOblique;
    }

    /** Gets the Helvetica Bold Oblique core font with Latin 1 encoding. */
    static get HelveticaBoldOblique() {
        if (this.#helveticaBoldOblique == null || this.#helveticaBoldOblique == undefined) {
            this.#helveticaBoldOblique = new Font();
            this.#helveticaBoldOblique.Name = "timesItalic";
        }
        return this.#helveticaBoldOblique;
    }

    /** Gets the Courier core font with Latin 1 encoding. */
    static get Courier() {
        if (this.#courier == null || this.#courier == undefined) {
            this.#courier = new Font();
            this.#courier.Name = "courier";
        }
        return this.#courier;
    }

    /** Gets the Courier Bold core font with Latin 1 encoding. */
    static get CourierBold() {
        if (this.#courierBold == null || this.#courierBold == undefined) {
            this.#courierBold = new Font();
            this.#courierBold.Name = "courierBold";
        }
        return this.#courierBold;
    }

    /** Gets the Courier Oblique core font with Latin 1 encoding. */
    static get CourierOblique() {
        if (this.#courierOblique == null || this.#courierOblique == undefined) {
            this.#courierOblique = new Font();
            this.#courierOblique.Name = "courierOblique";
        }
        return this.#courierOblique;
    }

    /** Gets the Courier Bold Oblique core font with Latin 1 encoding. */
    static get CourierBoldOblique() {
        if (this.#courierBoldOblique == null || this.#courierBoldOblique == undefined) {
            this.#courierBoldOblique = new Font();
            this.#courierBoldOblique.Name = "courierBoldOblique";
        }
        return this.#courierBoldOblique;
    }

    /** Gets the Symbol core font. */
    static get Symbol() {
        if (this.#symbol == null || this.#symbol == undefined) {
            this.#symbol = new Font();
            this.#symbol.Name = "symbol";
        }
        return this.#symbol;
    }

    /** Gets the Zapf Dingbats core font. */
    static get ZapfDingbats() {
        if (this.#zapfDingbats == null || this.#zapfDingbats == undefined) {
            this.#zapfDingbats = new Font();
            this.#zapfDingbats.Name = "zapfDingbats";
        }
        return this.#zapfDingbats;
    }

    /**
     * Initializes a new instance of the `Font` class using the file path of the font and resource name.
     * @param {string} filePath The file path of the font file.
     * @param {string} resourceName The resource name for the font.
     * @returns font
     */
    static FromFile(filePath, resourceName = null) {
        this.resource = new FontResource(filePath, resourceName);
        this.font = new Font(this.resource, this.resource.resourceName);
        return this.font;
    }

    /**
     * Initializes a new instance of the `Font` class 
     * using the stream of the font file and resource name.
     * @param {stream} stream The stream of the font file.
     * @param {string} resourceName The resource name for the font.
     * @returns font
     */
    static FromStream(stream, resourceName = null) {
        this.resource = new FontResource(stream, resourceName);
        return new Font(this.resource, this.resource.resourceName);
    }
}