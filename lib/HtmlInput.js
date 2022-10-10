import { inputType } from "./InputType.js";
import { Input } from "./Input.js";
import { v4 as uuidv4 } from 'uuid';
import { PageSize } from "./PageSize.js";
import { Orientation } from "./Orientation.js";
/**
 * Represents a HTML input.
 */
export class HtmlInput extends Input {
    htmlString;
    #smaller;
    #larger;
    #basePath;
    /**
    * Initializes a new instance of the `HTMLInput` class.
    * @param { string} input The html embeded as a string. 
    */
    constructor(resource, pageSize = null, Orientation = null) {
        super(resource);
        this._Type = inputType.html;
        this.getPaperSize(PageSize.Letter);
        if (pageSize != null) {
            this.getPaperSize(pageSize)
        }
        if (Orientation != null) {
            this.getOrientationValues(Orientation)
        }
        this.pageWidth = this.#smaller
        this.pageHeight = this.#larger
    }
    getOrientationValues(pageOrientation) {
        if (pageOrientation == Orientation.landscape) {
            var temp = this.#smaller
            this.#smaller = this.#larger
            this.#larger = temp
        }
    }

    /** Gets the TopMargin. */
    get TopMargin() {
        return this.topMargin;
    }

    /** sets the TopMargin. */
    set TopMargin(value) {
        this.topMargin = value;
    }

    /** Gets the BottomMargin. */
    get BottomMargin() {
        return this.bottomMargin;
    }

    /** sets the BottomMargin. */
    set BottomMargin(value) {
        this.bottomMargin = value;
    }

    /** Gets the LeftMargin. */
    get LeftMargin() {
        return this.leftMargin;
    }

    /** sets the LeftMargin. */
    set LeftMargin(value) {
        this.leftMargin = value;
    }

    /** Gets the RightMargin. */
    get RightMargin() {
        return this.rightMargin;
    }

    /** sets the RightMargin. */
    set RightMargin(value) {
        this.rightMargin = value;
    }

    /** Gets the BasePath. */
    get BasePath() {
        return this.#basePath;
    }

    /** sets the BasePath. */
    set BasePath(value) {
        this.#basePath = value;
    }
    getPaperSize(size) {
        switch (size) {
            case PageSize.Tabloid:
                this.#smaller = this.InchesToPoints(8.5)
                this.#larger = this.InchesToPoints(11)
                break
            case PageSize.Legal:
                this.#smaller = this.InchesToPoints(8.5)
                this.#larger = this.InchesToPoints(14)
                break
            case PageSize.Executive:
                this.#smaller = this.InchesToPoints(7.25)
                this.#larger = this.InchesToPoints(10.5)
                break
            case PageSize.Tabloid:
                this.#smaller = this.InchesToPoints(11)
                this.#larger = this.InchesToPoints(17)
                break
            case PageSize.Envelope10:
                this.#smaller = this.InchesToPoints(4.125)
                this.#larger = this.InchesToPoints(9.5)
                break
            case PageSize.EnvelopeMonarch:
                this.#smaller = this.InchesToPoints(3.875)
                this.#larger = this.InchesToPoints(7.5)
                break
            case PageSize.Folio:
                this.#smaller = this.InchesToPoints(8.5)
                this.#larger = this.InchesToPoints(13)
                break
            case PageSize.Statement:
                this.#smaller = this.InchesToPoints(5.5)
                this.#larger = this.InchesToPoints(8.5)
                break
            case PageSize.A4:
                this.#smaller = this.MillimetersToPoints(210)
                this.#larger = this.MillimetersToPoints(297)
                break
            case PageSize.A5:
                this.#smaller = this.MillimetersToPoints(148)
                this.#larger = this.MillimetersToPoints(210)
                break
            case PageSize.B4:
                this.#smaller = this.MillimetersToPoints(250)
                this.#larger = this.MillimetersToPoints(353)
                break
            case PageSize.B5:
                this.#smaller = this.MillimetersToPoints(176)
                this.#larger = this.MillimetersToPoints(250)
                break
            case PageSize.A3:
                this.#smaller = this.MillimetersToPoints(297)
                this.#larger = this.MillimetersToPoints(420)
                break
            case PageSize.B3:
                this.#smaller = this.MillimetersToPoints(353)
                this.#larger = this.MillimetersToPoints(500)
                break
            case PageSize.A6:
                this.#smaller = this.MillimetersToPoints(105)
                this.#larger = this.MillimetersToPoints(148)
                break
            case PageSize.B5JIS:
                this.#smaller = this.MillimetersToPoints(182)
                this.#larger = this.MillimetersToPoints(257)
                break
            case PageSize.EnvelopeDL:
                this.#smaller = this.MillimetersToPoints(110)
                this.#larger = this.MillimetersToPoints(220)
                break
            case PageSize.EnvelopeC5:
                this.#smaller = this.MillimetersToPoints(162)
                this.#larger = this.MillimetersToPoints(229)
                break
            case PageSize.EnvelopeB5:
                this.#smaller = this.MillimetersToPoints(176)
                this.#larger = this.MillimetersToPoints(250)
                break
            case PageSize.PRC16K:
                this.#smaller = this.MillimetersToPoints(146)
                this.#larger = this.MillimetersToPoints(215)
                break
            case PageSize.PRC32K:
                this.#smaller = this.MillimetersToPoints(97)
                this.#larger = this.MillimetersToPoints(151)
                break
            case PageSize.Quatro:
                this.#smaller = this.MillimetersToPoints(215)
                this.#larger = this.MillimetersToPoints(275)
                break
            case PageSize.DoublePostcard:
                this.#smaller = this.MillimetersToPoints(148.0)
                this.#larger = this.MillimetersToPoints(200.0)
                break
            case PageSize.Postcard:
                this.#smaller = this.InchesToPoints(3.94)
                this.#larger = this.InchesToPoints(5.83)
                break
            default:
                this.#smaller = this.InchesToPoints(8.5)
                this.#larger = this.InchesToPoints(11)
                break
        }
    }

    InchesToPoints(size) {
        return size * 72.0
    }

    MillimetersToPoints(size) {
        return size * 2.8346456692913385826771653543307
    }

    toJSON() {
        return {
            basePath:this.#basePath,
            topMargin: this.topMargin,
            leftMargin: this.leftMargin,
            bottomMargin: this.bottomMargin,
            rightMargin: this.rightMargin,
            pageWidth: this.pageWidth,
            pageHeight: this.pageHeight,
            type: this._Type,
            resourceName: this.resourceName,
            id: this.id,
        }
    }
}