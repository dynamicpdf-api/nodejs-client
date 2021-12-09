import { Color } from './Color.js';

/**Represents an RGB color. */
export class RgbColor extends Color {

    #red;

    #green;
    
    #blue;

    /**
     * Initializes a new instance of the `RgbColor` class.
     * @param {number} red The red intensity.
     * @param {number} green The green intensity.
     * @param {number} blue The blue intensity.
     */
    constructor(red, green, blue) {
        super();
        if (typeof (red) === "string") { this.colorString = red; }
        else {
            if (red < 0.0 || red > 1.0 || green < 0.0 || green > 1.0 || blue < 0.0 || blue > 1.0) {
                throw "RGB values must be from 0.0 to 1.0.";
            }
            this.#red = red;
            this.#green = green;
            this.#blue = blue;
        }
    }

    get colorString() {
        if (super.colorString != null)
            return super.colorString;
        else
            return "rgb(" + this.#red.toString() + "," + this.#blue.toString() + "," + this.#green.toString() + ")";
    }

    set colorString(value) {
        super.colorString = value;
    }

    /**Gets the color red. */
    static get red() {
        return new RgbColor("Red");
    }

    /**Gets the color blue. */
    static get blue() {
        return new RgbColor("Blue");
    }

    /**Gets the color green. */
    static get green() {
        return new RgbColor("Green");
    }

    /** Gets the color black. */
    static get black() {
        return new RgbColor("Black");
    }

    /**Gets the color silver. */
    static get silver() {
        return new RgbColor("Silver");
    }

    /**Gets the color DarkGray. */
    static get darkGray() {
        return new RgbColor("DarkGray");
    }

    /**Gets the color Gray. */
    static get rgbColor() {
        return new RgbColor("Gray");
    }

    /**Gets the color DimGray. */
    static get dimGray() {
        return new RgbColor("DimGray");
    }

    /** Gets the color white. */
    static get white() {
        return new RgbColor("White");
    }

    /**Gets the color lime. */
    static get lime() {
        return new RgbColor("Lime");
    }

    /**Gets the color aqua. */
    static get aqua() {
        return new RgbColor("Aqua");
    }

    /**Gets the color purple. */
    static get purple() {
        return new RgbColor("Purple");
    }

    /**Gets the color cyan. */
    static get cyan() {
        return new RgbColor("Cyan");
    }

    /** Gets the color magenta */
    static get magenta() {
        return new RgbColor("Magenta");
    }

    /**Gets the color yellow. */
    static get yellow() {
        return new RgbColor("Yellow");
    }

    /**Gets the color alice blue. */
    static get aliceBlue() {
        return new RgbColor("AliceBlue");
    }

    /**Gets the color antique white */
    static get antiqueWhite() {
        return new RgbColor("AntiqueWhite");
    }

    /** Gets the color aquamarine */
    static get aquamarine() {
        return new RgbColor("Aquamarine");
    }

    /**Gets the color azure */
    static get azure() {
        return new RgbColor("Azure");
    }

    /**Gets the color beige */
    static get beige() {
        return new RgbColor("Beige");
    }

    /**Gets the color bisque */
    static get bisque() {
        return new RgbColor("Bisque");
    }

    /**Gets the color blanched almond */
    static get blanchedAlmond() {
        return new RgbColor("BlanchedAlmond");
    }

    /**Gets the color blue violet */
    static get blueViolet() {
        return new RgbColor("BlueViolet");
    }

    /** Gets the color brown */
    static get brown() {
        return new RgbColor("Brown");
    }

    /**Gets the color burly wood */
    static get burlyWood() {
        return new RgbColor("BurlyWood");
    }

    /**Gets the color cadet blue. */
    static get cadetBlue() {
        return new RgbColor("CadetBlue");
    }

    /**Gets the color chartreuse. */
    static get chartreuse() {
        return new RgbColor("Chartreuse");
    }

    /** Gets the color chocolate */
    static get chocolate() {
        return new RgbColor("Chocolate");
    }

    /** Gets the color coral */
    static get coral() {
        return new RgbColor("Coral");
    }

    /**Gets the color cornflower blue */
    static get cornflowerBlue() {
        return new RgbColor("CornflowerBlue");
    }

    /** Gets the color corn silk */
    static get cornsilk() {
        return new RgbColor("Cornsilk");
    }

    /**Gets the color crimson. */
    static get crimson() {
        return new RgbColor("Crimson");
    }

    /**Gets the color dark blue */
    static get darkBlue() {
        return new RgbColor("DarkBlue");
    }

    /**Gets the color dark cyan */
    static get darkCyan() {
        return new RgbColor("DarkCyan");
    }

    /**Gets the color dark golden rod */
    static get darkGoldenRod() {
        return new RgbColor("DarkGoldenRod");
    }

    /** Gets the color dark green */
    static get darkGreen() {
        return new RgbColor("DarkGreen");
    }

    /** Gets the color dark khaki */
    static get darkKhaki() {
        return new RgbColor("DarkKhaki");
    }

    /**Gets the color dark magenta */
    static get darkMagenta() {
        return new RgbColor("DarkMagenta");
    }

    /**Gets the color dark olive green */
    static get darkOliveGreen() {
        return new RgbColor("DarkOliveGreen");
    }

    /** Gets the color dark orange */
    static get darkOrange() {
        return new RgbColor("DarkOrange");
    }

    /**Gets the color dark orchid */
    static get darkOrchid() {
        return new RgbColor("DarkOrchid");
    }

    /**Gets the color dark red. */
    static get darkRed() {
        return new RgbColor("DarkRed");
    }

    /** Gets the color dark salmon */
    static get darkSalmon() {
        return new RgbColor("DarkSalmon");
    }

    /**Gets the color dark sea green */
    static get darkSeaGreen() {
        return new RgbColor("DarkSeaGreen");
    }

    /** Gets the color dark slate blue */
    static get darkSlateBlue() {
        return new RgbColor("DarkSlateBlue");
    }

    /** Gets the color dark slate gray */
    static get darkSlateGray() {
        return new RgbColor("DarkSlateGray");
    }

    /** Gets the color dark turquoise */
    static get darkTurquoise() {
        return new RgbColor("DarkTurquoise");
    }

    /** Gets the color dark dark violet */
    static get darkViolet() {
        return new RgbColor("DarkViolet");
    }

    /** Gets the color deep pink */
    static get deepPink() {
        return new RgbColor("DeepPink");
    }

    /** Gets the color deep sky blue */
    static get deepSkyBlue() {
        return new RgbColor("DeepSkyBlue");
    }

    /** Gets the color dodger blue */
    static get dodgerBlue() {
        return new RgbColor("DodgerBlue");
    }

    /** Gets the color dark feldspar */
    static get feldspar() {
        return new RgbColor("Feldspar");
    }

    /** Gets the color fre brick */
    static get fireBrick() {
        return new RgbColor("FireBrick");
    }

    /** Gets the color floral white */
    static get floralWhite() {
        return new RgbColor("FloralWhite");
    }

    /** Gets the color forest green */
    static get forestGreen() {
        return new RgbColor("ForestGreen");
    }

    /** Gets the color fuchsia */
    static get fuchsia() {
        return new RgbColor("Fuchsia");
    }

    /** Gets the color ghost white */
    static get ghostWhite() {
        return new RgbColor("GhostWhite");
    }

    /** Gets the color gold */
    static get gold() {
        return new RgbColor("Gold");
    }

    /** Gets the color golden rod */
    static get goldenRod() {
        return new RgbColor("GoldenRod");
    }

    /** Gets the color green yellow */
    static get greenYellow() {
        return new RgbColor("GreenYellow");
    }

    /** Gets the color honey dew */
    static get honeyDew() {
        return new RgbColor("HoneyDew");
    }

    /** Gets the color hot pink */
    static get hotPink() {
        return new RgbColor("HotPink");
    }

    /** Gets the color indian red */
    static get indianRed() {
        return new RgbColor("IndianRed");
    }

    /** Gets the color indigo */
    static get indigo() {
        return new RgbColor("Indigo");
    }

    /** Gets the color ivory */
    static get ivory() {
        return new RgbColor("Ivory");
    }

    /** Gets the color khaki */
    static get khaki() {
        return new RgbColor("Khaki");
    }

    /** Gets the color lavender */
    static get lavender() {
        return new RgbColor("Lavender");
    }

    /** Gets the color lavender blush */
    static get lavenderBlush() {
        return new RgbColor("LavenderBlush");
    }

    /** Gets the color lawn green */
    static get lawnGreen() {
        return new RgbColor("LawnGreen");
    }

    /** Gets the color lemon chiffon */
    static get lemonChiffon() {
        return new RgbColor("LemonChiffon");
    }

    /** Gets the color light blue */
    static get lightBlue() {
        return new RgbColor("LightBlue");
    }

    /** Gets the color light coral */
    static get lightCoral() {
        return new RgbColor("LightCoral");
    }

    /** Gets the color light cyan */
    static get lightCyan() {
        return new RgbColor("LightCyan");
    }

    /** Gets the color light golden rod yellow */
    static get lightGoldenRodYellow() {
        return new RgbColor("LightGoldenRodYellow");
    }

    /** Gets the color light grey*/
    static get lightGrey() {
        return new RgbColor("LightGrey");
    }

    /** Gets the color light green */
    static get lightGreen() {
        return new RgbColor("LightGreen");
    }

    /** Gets the color light pink*/
    static get lightPink() {
        return new RgbColor("LightPink");
    }

    /** Gets the color light salmon */
    static get lightSalmon() {
        return new RgbColor("LightSalmon");
    }

    /** Gets the color light sea green*/
    static get lightSeaGreen() {
        return new RgbColor("LightSeaGreen");
    }

    /** Gets the color light sky blue*/
    static get lightSkyBlue() {
        return new RgbColor("LightSkyBlue");
    }

    /** Gets the color light slate blue */
    static get lightSlateBlue() {
        return new RgbColor("LightSlateBlue");
    }

    /** Gets the color light slate gray */
    static get lightSlateGray() {
        return new RgbColor("LightSlateGray");
    }

    /** Gets the color light steel blue */
    static get lightSteelBlue() {
        return new RgbColor("LightSteelBlue");
    }

    /** Gets the color light yellow*/
    static get lightYellow() {
        return new RgbColor("LightYellow");
    }

    /** Gets the color lime green */
    static get limeGreen() {
        return new RgbColor("LimeGreen");
    }

    /** Gets the color linen */
    static get linen() {
        return new RgbColor("Linen");
    }

    /** Gets the color maroon */
    static get maroon() {
        return new RgbColor("Maroon");
    }

    /** Gets the color medium aqua marine */
    static get mediumAquaMarine() {
        return new RgbColor("MediumAquaMarine");
    }

    /** Gets the color medium blue */
    static get mediumBlue() {
        return new RgbColor("MediumBlue");
    }

    /** Gets the color medium orchid */
    static get mediumOrchid() {
        return new RgbColor("MediumOrchid");
    }

    /** Gets the color medium purple */
    static get mediumPurple() {
        return new RgbColor("MediumPurple");
    }

    /** Gets the color medium sea green */
    static get mediumSeaGreen() {
        return new RgbColor("MediumSeaGreen");
    }

    /** Gets the color medium slate blue */
    static get mediumSlateBlue() {
        return new RgbColor("MediumSlateBlue");
    }

    /** Gets the color medium spring green */
    static get mediumSpringGreen() {
        return new RgbColor("MediumSpringGreen");
    }

    /** Gets the color medium turquoise */
    static get mediumTurquoise() {
        return new RgbColor("MediumTurquoise");
    }

    /** Gets the color medium violet red */
    static get mediumVioletRed() {
        return new RgbColor("MediumVioletRed");
    }

    /** Gets the color midnight blue */
    static get midnightBlue() {
        return new RgbColor("MidnightBlue");
    }

    /** Gets the color mint cream */
    static get mintCream() {
        return new RgbColor("MintCream");
    }

    /** Gets the color misty rose */
    static get mistyRose() {
        return new RgbColor("MistyRose");
    }

    /** Gets the color moccasin */
    static get moccasin() {
        return new RgbColor("Moccasin");
    }

    /** Gets the color navajo white */
    static get navajoWhite() {
        return new RgbColor("NavajoWhite");
    }

    /** Gets the color navy */
    static get navy() {
        return new RgbColor("Navy");
    }

    /** Gets the color old lace */
    static get oldLace() {
        return new RgbColor("OldLace");
    }

    /** Gets the color olive */
    static get olive() {
        return new RgbColor("Olive");
    }

    /** Gets the color olive drab */
    static get oliveDrab() {
        return new RgbColor("OliveDrab");
    }

    /** Gets the color gainsboro */
    static get gainsboro() {
        return new RgbColor("Gainsboro");
    }

    /** Gets the color orange */
    static get orange() {
        return new RgbColor("Orange");
    }

    /** Gets the color orange red */
    static get orangeRed() {
        return new RgbColor("OrangeRed");
    }

    /** Gets the color orchid */
    static get orchid() {
        return new RgbColor("Orchid");
    }

    /** Gets the color pale golden red */
    static get paleGoldenRod() {
        return new RgbColor("PaleGoldenRod");
    }

    /** Gets the color pale green */
    static get paleGreen() {
        return new RgbColor("PaleGreen");
    }

    /** Gets the color pale turquoise */
    static get paleTurquoise() {
        return new RgbColor("PaleTurquoise");
    }

    /** Gets the color pale violet red */
    static get paleVioletRed() {
        return new RgbColor("PaleVioletRed");
    }

    /** Gets the color papaya whip */
    static get papayaWhip() {
        return new RgbColor("PapayaWhip");
    }

    /** Gets the color peach puff*/
    static get peachPuff() {
        return new RgbColor("PeachPuff");
    }

    /** Gets the color peru */
    static get peru() {
        return new RgbColor("Peru");
    }

    /** Gets the color pink */
    static get pink() {
        return new RgbColor("Pink");
    }

    /** Gets the color plum */
    static get plum() {
        return new RgbColor("Plum");
    }

    /** Gets the color powder blue */
    static get powderBlue() {
        return new RgbColor("PowderBlue");
    }

    /** Gets the color rosy brown */
    static get rosyBrown() {
        return new RgbColor("RosyBrown");
    }

    /** Gets the color royal blue */
    static get royalBlue() {
        return new RgbColor("RoyalBlue");
    }

    /** Gets the color saddle brown */
    static get saddleBrown() {
        return new RgbColor("SaddleBrown");
    }

    /** Gets the color salmon */
    static get salmon() {
        return new RgbColor("Salmon");
    }

    /** Gets the color sandy brown */
    static get sandyBrown() {
        return new RgbColor("SandyBrown");
    }

    /** Gets the color sea green */
    static get seaGreen() {
        return new RgbColor("SeaGreen");
    }

    /** Gets the color sea shell */
    static get seaShell() {
        return new RgbColor("SeaShell");
    }

    /** Gets the color sienna */
    static get sienna() {
        return new RgbColor("Sienna");
    }

    /** Gets the color sky blue */
    static get skyBlue() {
        return new RgbColor("SkyBlue");
    }

    /** Gets the color slate blue */
    static get slateBlue() {
        return new RgbColor("SlateBlue");
    }

    /** Gets the color slate gray */
    static get slateGray() {
        return new RgbColor("SlateGray");
    }

    /** Gets the color snow */
    static get snow() {
        return new RgbColor("Snow");
    }

    /** Gets the color spring green */
    static get springGreen() {
        return new RgbColor("SpringGreen");
    }

    /** Gets the color steel blue */
    static get steelBlue() {
        return new RgbColor("SteelBlue");
    }

    /** Gets the color tan */
    static get tan() {
        return new RgbColor("Tan");
    }

    /** Gets the color teal */
    static get teal() {
        return new RgbColor("Teal");
    }

    /** Gets the color thistle */
    static get thistle() {
        return new RgbColor("Thistle");
    }

    /** Gets the color tomato */
    static get tomato() {
        return new RgbColor("Tomato");
    }

    /** Gets the color turquoise */
    static get turquoise() {
        return new RgbColor("Turquoise");
    }

    /** Gets the color violet */
    static get violet() {
        return new RgbColor("Violet");
    }

    /** Gets the color violet red */
    static get violetRed() {
        return new RgbColor("VioletRed");
    }

    /** Gets the color wheat */
    static get wheat() {
        return new RgbColor("Wheat");
    }

    /** Gets the color white smoke */
    static get whiteSmoke() {
        return new RgbColor("WhiteSmoke");
    }

    /** Gets the color yellow green */
    static get yellowGreen() {
        return new RgbColor("YellowGreen");
    }
}
