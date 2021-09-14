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
            this.LineStyleString = dashArray;
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
            this.LineStyleString = strLineStyle;
        }
    }

    get LineStyleString() {
        return this.#lineStyleString;
    }
    set LineStyleString(value) {
        this.#lineStyleString = value;
    }

    /** Gets a solid line.*/
    static get Solid() { return new LineStyle("solid"); }

    /** Gets a dotted line. */
    static get Dots() { return new LineStyle("dots"); }

    /** Gets a line with small dashes. */
    static get DashSmall() { return new LineStyle("dashSmall"); }

    /** Gets a dashed line. */
    static get Dash() { return new LineStyle("dash"); }

    /** Gets a line with large dashes. */
    static get DashLarge() { return new LineStyle("dashLarge"); }

    /** Gets a invisible line.  */
    static get None() { return new LineStyle("none"); }
}
