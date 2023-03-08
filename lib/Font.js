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

    #resource;

    resourceName;

    embed;

    subset;

    name;

    font;

    static pathToFontsResourceDirectory = "";

    /**
     * Initializes a new instance of the `Font` class 
     * using the font name that is present in the cloud resource manager.  
     * @param {string} Resource the cloudResourceName
     */
    constructor(Resource, resourceName = null) {
        if (typeof (Resource) !== "string") {
            this.#resource = Resource;
            this.resourceName = resourceName;
            this.name = uuidv4();
        }
        else {
            this.font = Font.fromFile(Resource, resourceName);
        }
    }

    get resource() {
        return this.#resource;
    }

    /** Gets the Times Italic core font with Latin 1 encoding. */
    static get timesItalic() {
        if (this.#timesItalic == null || this.#timesItalic == undefined) {
            this.#timesItalic = new Font();
            this.#timesItalic.name = "timesItalic";
        }
        return this.#timesItalic;
    }

    /** Gets the Times Roman core font with Latin 1 encoding. */
    static get timesRoman() {
        if (this.#timesRoman == null || this.#timesRoman == undefined) {
            this.#timesRoman = new Font();
            this.#timesRoman.name = "timesRoman";
        }
        return this.#timesRoman;
    }

    /** Gets the Times Bold core font with Latin 1 encoding. */
    static get timesBold() {
        if (this.#timesBold == null || this.#timesBold == undefined) {
            this.#timesBold = new Font();
            this.#timesBold.name = "timesBold";
        }
        return this.#timesBold;
    }

    /** Gets the Times Bold Italic core font with Latin 1 encoding. */
    static get timesBoldItalic() {
        if (this.#timesBoldItalic == null || this.#timesBoldItalic == undefined) {
            this.#timesBoldItalic = new Font();
            this.#timesBoldItalic.name = "timesBoldItalic";
        }
        return this.#timesBoldItalic;
    }

    /** Gets the Helvetica core font with Latin 1 encoding. */
    static get helvetica() {
        if (this.#helvetica == null || this.#helvetica == undefined) {
            this.#helvetica = new Font();
            this.#helvetica.name = "helvetica";
        }
        return this.#helvetica;
    }

    /** Gets the Helvetica Bold core font with Latin 1 encoding. */
    static get helveticaBold() {
        if (this.#helveticaBold == null || this.#helveticaBold == undefined) {
            this.#helveticaBold = new Font();
            this.#helveticaBold.name = "helveticaBold";
        }
        return this.#helveticaBold;
    }

    /** Gets the Helvetica Oblique core font with Latin 1 encoding. */
    static get helveticaOblique() {
        if (this.#helveticaOblique == null || this.#helveticaOblique == undefined) {
            this.#helveticaOblique = new Font();
            this.#helveticaOblique.name = "helveticaOblique";
        }
        return this.#helveticaOblique;
    }

    /** Gets the Helvetica Bold Oblique core font with Latin 1 encoding. */
    static get helveticaBoldOblique() {
        if (this.#helveticaBoldOblique == null || this.#helveticaBoldOblique == undefined) {
            this.#helveticaBoldOblique = new Font();
            this.#helveticaBoldOblique.name = "helveticaBoldOblique";
        }
        return this.#helveticaBoldOblique;
    }

    /** Gets the Courier core font with Latin 1 encoding. */
    static get courier() {
        if (this.#courier == null || this.#courier == undefined) {
            this.#courier = new Font();
            this.#courier.name = "courier";
        }
        return this.#courier;
    }

    /** Gets the Courier Bold core font with Latin 1 encoding. */
    static get courierBold() {
        if (this.#courierBold == null || this.#courierBold == undefined) {
            this.#courierBold = new Font();
            this.#courierBold.name = "courierBold";
        }
        return this.#courierBold;
    }

    /** Gets the Courier Oblique core font with Latin 1 encoding. */
    static get courierOblique() {
        if (this.#courierOblique == null || this.#courierOblique == undefined) {
            this.#courierOblique = new Font();
            this.#courierOblique.name = "courierOblique";
        }
        return this.#courierOblique;
    }

    /** Gets the Courier Bold Oblique core font with Latin 1 encoding. */
    static get courierBoldOblique() {
        if (this.#courierBoldOblique == null || this.#courierBoldOblique == undefined) {
            this.#courierBoldOblique = new Font();
            this.#courierBoldOblique.name = "courierBoldOblique";
        }
        return this.#courierBoldOblique;
    }

    /** Gets the Symbol core font. */
    static get symbol() {
        if (this.#symbol == null || this.#symbol == undefined) {
            this.#symbol = new Font();
            this.#symbol.name = "symbol";
        }
        return this.#symbol;
    }

    /** Gets the Zapf Dingbats core font. */
    static get zapfDingbats() {
        if (this.#zapfDingbats == null || this.#zapfDingbats == undefined) {
            this.#zapfDingbats = new Font();
            this.#zapfDingbats.name = "zapfDingbats";
        }
        return this.#zapfDingbats;
    }

    /**
     * Initializes a new instance of the `Font` class using the file path of the font and resource name.
     * @param {string} filePath The file path of the font file.
     * @param {string} resourceName The resource name for the font.
     * @returns font
     */
    static fromFile(filePath, resourceName = null) {
        this.Resource = new FontResource(filePath, resourceName);
        this.font = new Font(this.Resource, this.Resource.resourceName);
        return this.font;
    }

    /**
     * Initializes a new instance of the `Font` class 
     * using the stream of the font file and resource name.
     * @param {stream} stream The stream of the font file.
     * @param {string} resourceName The resource name for the font.
     * @returns font
     */
    static fromStream(stream, resourceName = null) {
        this.Resource = new FontResource(stream, resourceName);
        return new Font(this.Resource, this.Resource.resourceName);
    }

    toJSON() {
        return {
            embed: this.embed,
            subset: this.subset,
            resourceName: this.resourceName,
            name: this.name,
        };
    }
}