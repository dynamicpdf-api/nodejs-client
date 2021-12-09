/** Represents a style of line. */
export class LineStyle {

    #lineStyleString;

    /**
     * Initializes a new instance of the `LineStyle` class.
     * @param {number []} dashArray The array specifying the line style.
     * @param {number} dashPhase The phase of the line style.
     */
    constructor(dashArray, dashPhase = 0) {
        if (typeof (dashArray) == 'string') {
            this.lineStyleString = dashArray;
        }
        else {
            var strLineStyle = "[";
            for (var i = 0; i < dashArray.length; i++) {
                var val = dashArray[i];
                if (i == dashArray.length - 1)
                    strLineStyle += val.toFixed(2).toString();
                else
                    strLineStyle += val.toFixed(2).toString() + ",";
            }
            strLineStyle += "]";
            if (dashPhase != 0) {
                strLineStyle += dashPhase.toFixed(2).toString();
            }
            this.lineStyleString = strLineStyle;
        }
    }

    get lineStyleString() {
        return this.#lineStyleString;
    }
    set lineStyleString(value) {
        this.#lineStyleString = value;
    }

    /** Gets a solid line.*/
    static get solid() { return new LineStyle("solid"); }

    /** Gets a dotted line. */
    static get dots() { return new LineStyle("dots"); }

    /** Gets a line with small dashes. */
    static get dashSmall() { return new LineStyle("dashSmall"); }

    /** Gets a dashed line. */
    static get dash() { return new LineStyle("dash"); }

    /** Gets a line with large dashes. */
    static get dashLarge() { return new LineStyle("dashLarge"); }

    /** Gets a invisible line.  */
    static get none() { return new LineStyle("none"); }

    toJSON() {
        return {
            lineStyle: this.lineStyleString
        }
    }
}
