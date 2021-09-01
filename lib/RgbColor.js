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
        if (typeof (red) === "string") { this.ColorString = red; }
        else {
            if (red < 0.0 || red > 1.0 || green < 0.0 || green > 1.0 || blue < 0.0 || blue > 1.0) {
                throw new EndpointException("RGB values must be from 0.0 to 1.0.");
            }
            this.#red = red;
            this.#green = green;
            this.#blue = blue;
        }
    }

    get ColorString() {
        if (this.colorString != null)
            return this.colorString;
        else
            return "rgb(" + this.#red.toString() + "," + this.#blue.toString() + "," + this.#green.toString() + ")";
    }

    set ColorString(value) {
        this.colorString = value;
    }

    /**Gets the color red. */
    static get Red() {
        return new RgbColor("Red");
    }

    /**Gets the color blue. */
    static get Blue() {
        return new RgbColor("Blue");
    }

    /**Gets the color green. */
    static get Green() {
        return new RgbColor("Green");
    }

    /** Gets the color black. */
    static get Black() {
        return new RgbColor("Black");
    }

    /**Gets the color silver. */
    static get Silver() {
        return new RgbColor("Silver");
    }

    /**Gets the color DarkGray. */
    static get DarkGray() {
        return new RgbColor("DarkGray");
    }

    /**Gets the color Gray. */
    static get RgbColor() {
        return new RgbColor("Gray");
    }

    /**Gets the color DimGray. */
    static get DimGray() {
        return new RgbColor("DimGray");
    }

    /** Gets the color white. */
    static get White() {
        return new RgbColor("White");
    }

    /**Gets the color lime. */
    static get Lime() {
        return new RgbColor("Lime");
    }

    /**Gets the color aqua. */
    static get Aqua() {
        return new RgbColor("Aqua");
    }

    /**Gets the color purple. */
    static get Purple() {
        return new RgbColor("Purple");
    }

    /**Gets the color cyan. */
    static get Cyan() {
        return new RgbColor("Cyan");
    }

    /** Gets the color magenta */
    static get Magenta() {
        return new RgbColor("Magenta");
    }

    /**Gets the color yellow. */
    static get Yellow() {
        return new RgbColor("Yellow");
    }

    /**Gets the color alice blue. */
    static get AliceBlue() {
        return new RgbColor("AliceBlue");
    }

    /**Gets the color antique white */
    static get AntiqueWhite() {
        return new RgbColor("AntiqueWhite");
    }

    /** Gets the color aquamarine */
    static get Aquamarine() {
        return new RgbColor("Aquamarine");
    }

    /**Gets the color azure */
    static get Azure() {
        return new RgbColor("Azure");
    }

    /**Gets the color beige */
    static get Beige() {
        return new RgbColor("Beige");
    }

    /**Gets the color bisque */
    static get Bisque() {
        return new RgbColor("Bisque");
    }

    /**Gets the color blanched alomond */
    static get BlanchedAlmond() {
        return new RgbColor("BlanchedAlmond");
    }

    /**Gets the color blue violet */
    static get BlueViolet() {
        return new RgbColor("BlueViolet");
    }

    /** Gets the color brown */
    static get Brown() {
        return new RgbColor("Brown");
    }

    /**Gets the color burly wood */
    static get BurlyWood() {
        return new RgbColor("BurlyWood");
    }

    /**Gets the color cadet blue. */
    static get CadetBlue() {
        return new RgbColor("CadetBlue");
    }

    /**Gets the color chartreuse. */
    static get Chartreuse() {
        return new RgbColor("Chartreuse");
    }

    /** Gets the color chocolate */
    static get Chocolate() {
        return new RgbColor("Chocolate");
    }

    /** Gets the color coral */
    static get Coral() {
        return new RgbColor("Coral");
    }

    /**Gets the color cornflower blue */
    static get CornflowerBlue() {
        return new RgbColor("CornflowerBlue");
    }

    /** Gets the color cornsilk */
    static get Cornsilk() {
        return new RgbColor("Cornsilk");
    }

    /**Gets the color crimson. */
    static get Crimson() {
        return new RgbColor("Crimson");
    }

    /**Gets the color dark blue */
    static get DarkBlue() {
        return new RgbColor("DarkBlue");
    }

    /**Gets the color dark cyan */
    static get DarkCyan() {
        return new RgbColor("DarkCyan");
    }

    /**Gets the color dark golden rod */
    static get DarkGoldenRod() {
        return new RgbColor("DarkGoldenRod");
    }

    /** Gets the color dark green */
    static get DarkGreen() {
        return new RgbColor("DarkGreen");
    }

    /** Gets the color dark khaki */
    static get DarkKhaki() {
        return new RgbColor("DarkKhaki");
    }

    /**Gets the color dark magenta */
    static get DarkMagenta() {
        return new RgbColor("DarkMagenta");
    }

    /**Gets the color dark olive green */
    static get DarkOliveGreen() {
        return new RgbColor("DarkOliveGreen");
    }

    /** Gets the color dark orange */
    static get DarkOrange() {
        return new RgbColor("DarkOrange");
    }

    /**Gets the color dark orchid */
    static get DarkOrchid() {
        return new RgbColor("DarkOrchid");
    }

    /**Gets the color dark red. */
    static get DarkRed() {
        return new RgbColor("DarkRed");
    }

    /** Gets the color dark salmon */
    static get DarkSalmon() {
        return new RgbColor("DarkSalmon");
    }

    /**Gets the color dark sea green */
    static get DarkSeaGreen() {
        return new RgbColor("DarkSeaGreen");
    }

    /** Gets the color dark slate blue */
    static get DarkSlateBlue() {
        return new RgbColor("DarkSlateBlue");
    }

    /** Gets the color dark slate gray */
    static get DarkSlateGray() {
        return new RgbColor("DarkSlateGray");
    }

    /** Gets the color dark turquoise */
    static get DarkTurquoise() {
        return new RgbColor("DarkTurquoise");
    }

    /** Gets the color dark dark violet */
    static get DarkViolet() {
        return new RgbColor("DarkViolet");
    }

    /** Gets the color deep pink */
    static get DeepPink() {
        return new RgbColor("DeepPink");
    }

    /** Gets the color deep skybule */
    static get DeepSkyBlue() {
        return new RgbColor("DeepSkyBlue");
    }

    /** Gets the color dodger blue */
    static get DodgerBlue() {
        return new RgbColor("DodgerBlue");
    }

    /** Gets the color dark feldspar */
    static get Feldspar() {
        return new RgbColor("Feldspar");
    }

    /** Gets the color fre brick */
    static get FireBrick() {
        return new RgbColor("FireBrick");
    }

    /** Gets the color floral white */
    static get FloralWhite() {
        return new RgbColor("FloralWhite");
    }

    /** Gets the color forest green */
    static get ForestGreen() {
        return new RgbColor("ForestGreen");
    }

    /** Gets the color fuchsia */
    static get Fuchsia() {
        return new RgbColor("Fuchsia");
    }

    /** Gets the color ghost white */
    static get GhostWhite() {
        return new RgbColor("GhostWhite");
    }

    /** Gets the color gold */
    static get Gold() {
        return new RgbColor("Gold");
    }

    /** Gets the color golden rod */
    static get GoldenRod() {
        return new RgbColor("GoldenRod");
    }

    /** Gets the color green yellow */
    static get GreenYellow() {
        return new RgbColor("GreenYellow");
    }

    /** Gets the color honey dew */
    static get HoneyDew() {
        return new RgbColor("HoneyDew");
    }

    /** Gets the color hot pink */
    static get HotPink() {
        return new RgbColor("HotPink");
    }

    /** Gets the color indian red */
    static get IndianRed() {
        return new RgbColor("IndianRed");
    }

    /** Gets the color indigo */
    static get Indigo() {
        return new RgbColor("Indigo");
    }

    /** Gets the color ivory */
    static get Ivory() {
        return new RgbColor("Ivory");
    }

    /** Gets the color khaki */
    static get Khaki() {
        return new RgbColor("Khaki");
    }

    /** Gets the color lavender */
    static get Lavender() {
        return new RgbColor("Lavender");
    }

    /** Gets the color lavender blush */
    static get LavenderBlush() {
        return new RgbColor("LavenderBlush");
    }

    /** Gets the color lawn green */
    static get LawnGreen() {
        return new RgbColor("LawnGreen");
    }

    /** Gets the color lemon chiffon */
    static get LemonChiffon() {
        return new RgbColor("LemonChiffon");
    }

    /** Gets the color light blue */
    static get LightBlue() {
        return new RgbColor("LightBlue");
    }

    /** Gets the color light coral */
    static get LightCoral() {
        return new RgbColor("LightCoral");
    }

    /** Gets the color light cyan */
    static get LightCyan() {
        return new RgbColor("LightCyan");
    }

    /** Gets the color light golden rod yellow */
    static get LightGoldenRodYellow() {
        return new RgbColor("LightGoldenRodYellow");
    }

    /** Gets the color light grey*/
    static get LightGrey() {
        return new RgbColor("LightGrey");
    }

    /** Gets the color light green */
    static get LightGreen() {
        return new RgbColor("LightGreen");
    }

    /** Gets the color light pink*/
    static get LightPink() {
        return new RgbColor("LightPink");
    }

    /** Gets the color light salmon */
    static get LightSalmon() {
        return new RgbColor("LightSalmon");
    }

    /** Gets the color light sea green*/
    static get LightSeaGreen() {
        return new RgbColor("LightSeaGreen");
    }

    /** Gets the color light sky blue*/
    static get LightSkyBlue() {
        return new RgbColor("LightSkyBlue");
    }

    /** Gets the color light slate blue */
    static get LightSlateBlue() {
        return new RgbColor("LightSlateBlue");
    }

    /** Gets the color light slate gray */
    static get LightSlateGray() {
        return new RgbColor("LightSlateGray");
    }

    /** Gets the color light steel blue */
    static get LightSteelBlue() {
        return new RgbColor("LightSteelBlue");
    }

    /** Gets the color light yellow*/
    static get LightYellow() {
        return new RgbColor("LightYellow");
    }

    /** Gets the color lime green */
    static get LimeGreen() {
        return new RgbColor("LimeGreen");
    }

    /** Gets the color linen */
    static get Linen() {
        return new RgbColor("Linen");
    }

    /** Gets the color maroon */
    static get Maroon() {
        return new RgbColor("Maroon");
    }

    /** Gets the color medium aqua marine */
    static get MediumAquaMarine() {
        return new RgbColor("MediumAquaMarine");
    }

    /** Gets the color medium blue */
    static get MediumBlue() {
        return new RgbColor("MediumBlue");
    }

    /** Gets the color medium orchid */
    static get MediumOrchid() {
        return new RgbColor("MediumOrchid");
    }

    /** Gets the color medium purple */
    static get MediumPurple() {
        return new RgbColor("MediumPurple");
    }

    /** Gets the color medium sea green */
    static get MediumSeaGreen() {
        return new RgbColor("MediumSeaGreen");
    }

    /** Gets the color medium slate blue */
    static get MediumSlateBlue() {
        return new RgbColor("MediumSlateBlue");
    }

    /** Gets the color medium spring green */
    static get MediumSpringGreen() {
        return new RgbColor("MediumSpringGreen");
    }

    /** Gets the color medium turquoise */
    static get MediumTurquoise() {
        return new RgbColor("MediumTurquoise");
    }

    /** Gets the color medium violet red */
    static get MediumVioletRed() {
        return new RgbColor("MediumVioletRed");
    }

    /** Gets the color midnight blue */
    static get MidnightBlue() {
        return new RgbColor("MidnightBlue");
    }

    /** Gets the color mint cream */
    static get MintCream() {
        return new RgbColor("MintCream");
    }

    /** Gets the color misty rose */
    static get MistyRose() {
        return new RgbColor("MistyRose");
    }

    /** Gets the color moccasin */
    static get Moccasin() {
        return new RgbColor("Moccasin");
    }

    /** Gets the color navajowhite */
    static get NavajoWhite() {
        return new RgbColor("NavajoWhite");
    }

    /** Gets the color navy */
    static get Navy() {
        return new RgbColor("Navy");
    }

    /** Gets the color old lace */
    static get OldLace() {
        return new RgbColor("OldLace");
    }

    /** Gets the color olive */
    static get Olive() {
        return new RgbColor("Olive");
    }

    /** Gets the color olive drab */
    static get OliveDrab() {
        return new RgbColor("OliveDrab");
    }

    /** Gets the color gainsboro */
    static get Gainsboro() {
        return new RgbColor("Gainsboro");
    }

    /** Gets the color orange */
    static get Orange() {
        return new RgbColor("Orange");
    }

    /** Gets the color orange red */
    static get OrangeRed() {
        return new RgbColor("OrangeRed");
    }

    /** Gets the color orchid */
    static get Orchid() {
        return new RgbColor("Orchid");
    }

    /** Gets the color pale golden red */
    static get PaleGoldenRod() {
        return new RgbColor("PaleGoldenRod");
    }

    /** Gets the color pale green */
    static get PaleGreen() {
        return new RgbColor("PaleGreen");
    }

    /** Gets the color pale turquoise */
    static get PaleTurquoise() {
        return new RgbColor("PaleTurquoise");
    }

    /** Gets the color pale violet red */
    static get PaleVioletRed() {
        return new RgbColor("PaleVioletRed");
    }

    /** Gets the color papaya whip */
    static get PapayaWhip() {
        return new RgbColor("PapayaWhip");
    }

    /** Gets the color peach puff*/
    static get PeachPuff() {
        return new RgbColor("PeachPuff");
    }

    /** Gets the color peru */
    static get Peru() {
        return new RgbColor("Peru");
    }

    /** Gets the color pink */
    static get Pink() {
        return new RgbColor("Pink");
    }

    /** Gets the color plum */
    static get Plum() {
        return new RgbColor("Plum");
    }

    /** Gets the color powder blue */
    static get PowderBlue() {
        return new RgbColor("PowderBlue");
    }

    /** Gets the color rosy brown */
    static get RosyBrown() {
        return new RgbColor("RosyBrown");
    }

    /** Gets the color royal blue */
    static get RoyalBlue() {
        return new RgbColor("RoyalBlue");
    }

    /** Gets the color saddle brown */
    static get SaddleBrown() {
        return new RgbColor("SaddleBrown");
    }

    /** Gets the color salmon */
    static get Salmon() {
        return new RgbColor("Salmon");
    }

    /** Gets the color sandy brown */
    static get SandyBrown() {
        return new RgbColor("SandyBrown");
    }

    /** Gets the color sea green */
    static get SeaGreen() {
        return new RgbColor("SeaGreen");
    }

    /** Gets the color sea shell */
    static get SeaShell() {
        return new RgbColor("SeaShell");
    }

    /** Gets the color sienna */
    static get Sienna() {
        return new RgbColor("Sienna");
    }

    /** Gets the color sky blue */
    static get SkyBlue() {
        return new RgbColor("SkyBlue");
    }

    /** Gets the color salte blue */
    static get SlateBlue() {
        return new RgbColor("SlateBlue");
    }

    /** Gets the color slate gray */
    static get SlateGray() {
        return new RgbColor("SlateGray");
    }

    /** Gets the color snow */
    static get Snow() {
        return new RgbColor("Snow");
    }

    /** Gets the color spring green */
    static get SpringGreen() {
        return new RgbColor("SpringGreen");
    }

    /** Gets the color steel blue */
    static get SteelBlue() {
        return new RgbColor("SteelBlue");
    }

    /** Gets the color tan */
    static get Tan() {
        return new RgbColor("Tan");
    }

    /** Gets the color teal */
    static get Teal() {
        return new RgbColor("Teal");
    }

    /** Gets the color thistle */
    static get Thistle() {
        return new RgbColor("Thistle");
    }

    /** Gets the color tomato */
    static get Tomato() {
        return new RgbColor("Tomato");
    }

    /** Gets the color turquoise */
    static get Turquoise() {
        return new RgbColor("Turquoise");
    }

    /** Gets the color violet */
    static get Violet() {
        return new RgbColor("Violet");
    }

    /** Gets the color violet red */
    static get VioletRed() {
        return new RgbColor("VioletRed");
    }

    /** Gets the color wheat */
    static get Wheat() {
        return new RgbColor("Wheat");
    }

    /** Gets the color white smoke */
    static get WhiteSmoke() {
        return new RgbColor("WhiteSmoke");
    }

    /** Gets the color yellow green */
    static get YellowGreen() {
        return new RgbColor("YellowGreen");
    }
}
