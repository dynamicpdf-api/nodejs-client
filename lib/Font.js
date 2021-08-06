import { v4 as uuidv4 } from 'uuid';
import { FontResource } from "./FontResource.js";
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
    constructor(fontResource = null, resourceName = null) {
        if (typeof (fontResource) !== "string") {
            this.resource = fontResource;
            this.ResourceName = resourceName;
            this.Name = uuidv4();
        }
        else {
            this.ResourceName = resourceName;
            this.Name = uuidv4();
        }
    }
    static get TimesItalic() {
        if (this.#timesItalic == null || this.#timesItalic == undefined) {
            this.#timesItalic = new Font();
            this.#timesItalic.Name = "timesItalic";
        }
        return this.#timesItalic;
    }
    static get TimesRoman() {
        if (this.#timesRoman == null || this.#timesRoman == undefined) {
            this.#timesRoman = new Font();
            this.#timesRoman.Name = "timesRoman";
        }
        return this.#timesRoman;
    }
    static get TimesBold() {
        if (this.#timesBold == null || this.#timesBold == undefined) {
            this.#timesBold = new Font();
            this.#timesBold.Name = "timesItalic";
        }
        return this.#timesBold;
    }
    static get TimesBoldItalic() {
        if (this.#timesBoldItalic == null || this.#timesBoldItalic == undefined) {
            this.#timesBoldItalic = new Font();
            this.#timesBoldItalic.Name = "timesBoldItalic";
        }
        return this.#timesBoldItalic;
    }
    static get Helvetica() {
        if (this.#helvetica == null || this.#helvetica == undefined) {
            this.#helvetica = new Font();
            this.#helvetica.Name = "helvetica";
        }
        return this.#helvetica;
    }
    static get HelveticaBold() {
        if (this.#helveticaBold == null || this.#helveticaBold == undefined) {
            this.#helveticaBold = new Font();
            this.#helveticaBold.Name = "helveticaBold";
        }
        return this.#timesItalic;
    }
    static get HelveticaOblique() {
        if (this.#helveticaOblique == null || this.#helveticaOblique == undefined) {
            this.#helveticaOblique = new Font();
            this.#helveticaOblique.Name = "helveticaOblique";
        }
        return this.#helveticaOblique;
    }
    static get HelveticaBoldOblique() {
        if (this.#helveticaBoldOblique == null || this.#helveticaBoldOblique == undefined) {
            this.#helveticaBoldOblique = new Font();
            this.#helveticaBoldOblique.Name = "timesItalic";
        }
        return this.#helveticaBoldOblique;
    }
    static get Courier() {
        if (this.#courier == null || this.#courier == undefined) {
            this.#courier = new Font();
            this.#courier.Name = "courier";
        }
        return this.#courier;
    }
    static get CourierBold() {
        if (this.#courierBold == null || this.#courierBold == undefined) {
            this.#courierBold = new Font();
            this.#courierBold.Name = "courierBold";
        }
        return this.#courierBold;
    }
    static get CourierOblique() {
        if (this.#courierOblique == null || this.#courierOblique == undefined) {
            this.#courierOblique = new Font();
            this.#courierOblique.Name = "courierOblique";
        }
        return this.#courierOblique;
    }
    static get CourierBoldOblique() {
        if (this.#courierBoldOblique == null || this.#courierBoldOblique == undefined) {
            this.#courierBoldOblique = new Font();
            this.#courierBoldOblique.Name = "courierBoldOblique";
        }
        return this.#courierBoldOblique;
    }
    static get Symbol() {
        if (this.#symbol == null || this.#symbol == undefined) {
            this.#symbol = new Font();
            this.#symbol.Name = "symbol";
        }
        return this.#symbol;
    }
    static get ZapfDingbats() {
        if (this.#zapfDingbats == null || this.#zapfDingbats == undefined) {
            this.#zapfDingbats = new Font();
            this.#zapfDingbats.Name = "zapfDingbats";
        }
        return this.#zapfDingbats;
    }
    static FromFile(filePath, resourceName = null) {
        this.resource = new FontResource(filePath, resourceName);
        this.font = new Font(this.resource, this.resource.resourceName);
        return this.font;
    }
    static FromStream(stream, resourceName = null) {
        this.resource = new FontResource(stream, resourceName);
        return new Font(this.resource, this.resource.resourceName);
    }
}