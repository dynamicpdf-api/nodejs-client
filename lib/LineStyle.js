export class LineStyle {
    constructor(lineStyleOrdashArray, dashPhase = 0) {
        if (typeof (lineStyleOrdashArray) == 'string') {
            this.LineStyleString = lineStyleOrdashArray;
        }
        else {
            var strLineStyle = "[";
            for (var i = 0; i < lineStyleOrdashArray.length; i++) {
                var val = lineStyleOrdashArray[i];
                if (i == lineStyleOrdashArray.length - 1)
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
    LineStyleString;
    static get Solid() { return new LineStyle("solid"); }
    static get Dots() { return new LineStyle("dots"); }
    static get DashSmall() { return new LineStyle("dashSmall"); }
    static get Dash() { return new LineStyle("dash"); }
    static get DashLarge() { return new LineStyle("dashLarge"); }
    static get None() { return new LineStyle("none"); }
}
