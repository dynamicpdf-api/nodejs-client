import { Color } from './Color.js';
export class RgbColor extends Color {
    #red;
    #green;
    #blue;
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
    static get Red() {
        return new RgbColor("Red");
    }
    static get Blue() {
        return new RgbColor("Blue");
    }
    static get Green() {
        return new RgbColor("Green");
    }
    static get Black() {
        return new RgbColor("Black");
    }
    static get Silver() {
        return new RgbColor("Silver");
    }
    static get DarkGray() {
        return new RgbColor("DarkGray");
    }
    static get RgbColor() {
        return new RgbColor("Gray");
    }
    static get DimGray() {
        return new RgbColor("DimGray");
    }
    static get White() {
        return new RgbColor("White");
    }
    static get Lime() {
        return new RgbColor("Lime");
    }
    static get Aqua() {
        return new RgbColor("Aqua");
    }
    static get Purple() {
        return new RgbColor("Purple");
    }
    static get Cyan() {
        return new RgbColor("Cyan");
    }
    static get Magenta() {
        return new RgbColor("Magenta");
    }
    static get Yellow() {
        return new RgbColor("Yellow");
    }
    static get AliceBlue() {
        return new RgbColor("AliceBlue");
    }
    static get AntiqueWhite() {
        return new RgbColor("AntiqueWhite");
    }
    static get Aquamarine() {
        return new RgbColor("Aquamarine");
    }
    static get Azure() {
        return new RgbColor("Azure");
    }
    static get Beige() {
        return new RgbColor("Beige");
    }
    static get Bisque() {
        return new RgbColor("Bisque");
    }
    static get BlanchedAlmond() {
        return new RgbColor("BlanchedAlmond");
    }
    static get BlueViolet() {
        return new RgbColor("BlueViolet");
    }
    static get Brown() {
        return new RgbColor("Brown");
    }
    static get BurlyWood() {
        return new RgbColor("BurlyWood");
    }
    static get CadetBlue() {
        return new RgbColor("CadetBlue");
    }
    static get Chartreuse() {
        return new RgbColor("Chartreuse");
    }
    static get Chocolate() {
        return new RgbColor("Chocolate");
    }
    static get Coral() {
        return new RgbColor("Coral");
    }
    static get CornflowerBlue() {
        return new RgbColor("CornflowerBlue");
    }
    static get Cornsilk() {
        return new RgbColor("Cornsilk");
    }
    static get Crimson() {
        return new RgbColor("Crimson");
    }
    static get DarkBlue() {
        return new RgbColor("DarkBlue");
    }
    static get DarkCyan() {
        return new RgbColor("DarkCyan");
    }
    static get DarkGoldenRod() {
        return new RgbColor("DarkGoldenRod");
    }
    static get DarkGreen() {
        return new RgbColor("DarkGreen");
    }
    static get DarkKhaki() {
        return new RgbColor("DarkKhaki");
    }
    static get DarkMagenta() {
        return new RgbColor("DarkMagenta");
    }
    static get DarkOliveGreen() {
        return new RgbColor("DarkOliveGreen");
    }
    static get DarkOrange() {
        return new RgbColor("DarkOrange");
    }
    static get DarkOrchid() {
        return new RgbColor("DarkOrchid");
    }
    static get DarkRed() {
        return new RgbColor("DarkRed");
    }
    static get DarkSalmon() {
        return new RgbColor("DarkSalmon");
    }
    static get DarkSeaGreen() {
        return new RgbColor("DarkSeaGreen");
    }
    static get DarkSlateBlue() {
        return new RgbColor("DarkSlateBlue");
    }
    static get DarkSlateGray() {
        return new RgbColor("DarkSlateGray");
    }
    static get DarkTurquoise() {
        return new RgbColor("DarkTurquoise");
    }
    static get DarkViolet() {
        return new RgbColor("DarkViolet");
    }
    static get DeepPink() {
        return new RgbColor("DeepPink");
    }
    static get DeepSkyBlue() {
        return new RgbColor("DeepSkyBlue");
    }
    static get DodgerBlue() {
        return new RgbColor("DodgerBlue");
    }
    static get Feldspar() {
        return new RgbColor("Feldspar");
    }
    static get FireBrick() {
        return new RgbColor("FireBrick");
    }
    static get FloralWhite() {
        return new RgbColor("FloralWhite");
    }
    static get ForestGreen() {
        return new RgbColor("ForestGreen");
    }
    static get Fuchsia() {
        return new RgbColor("Fuchsia");
    }
    static get GhostWhite() {
        return new RgbColor("GhostWhite");
    }
    static get Gold() {
        return new RgbColor("Gold");
    }
    static get GoldenRod() {
        return new RgbColor("GoldenRod");
    }
    static get GreenYellow() {
        return new RgbColor("GreenYellow");
    }
    static get HoneyDew() {
        return new RgbColor("HoneyDew");
    }
    static get HotPink() {
        return new RgbColor("HotPink");
    }
    static get IndianRed() {
        return new RgbColor("IndianRed");
    }
    static get Indigo() {
        return new RgbColor("Indigo");
    }
    static get Ivory() {
        return new RgbColor("Ivory");
    }
    static get Khaki() {
        return new RgbColor("Khaki");
    }
    static get Lavender() {
        return new RgbColor("Lavender");
    }
    static get LavenderBlush() {
        return new RgbColor("LavenderBlush");
    }
    static get LawnGreen() {
        return new RgbColor("LawnGreen");
    }
    static get LemonChiffon() {
        return new RgbColor("LemonChiffon");
    }
    static get LightBlue() {
        return new RgbColor("LightBlue");
    }
    static get LightCoral() {
        return new RgbColor("LightCoral");
    }
    static get LightCyan() {
        return new RgbColor("LightCyan");
    }
    static get LightGoldenRodYellow() {
        return new RgbColor("LightGoldenRodYellow");
    }
    static get LightGrey() {
        return new RgbColor("LightGrey");
    }
    static get LightGreen() {
        return new RgbColor("LightGreen");
    }
    static get LightPink() {
        return new RgbColor("LightPink");
    }
    static get LightSalmon() {
        return new RgbColor("LightSalmon");
    }
    static get LightSeaGreen() {
        return new RgbColor("LightSeaGreen");
    }
    static get LightSkyBlue() {
        return new RgbColor("LightSkyBlue");
    }
    static get LightSlateBlue() {
        return new RgbColor("LightSlateBlue");
    }
    static get LightSlateGray() {
        return new RgbColor("LightSlateGray");
    }
    static get LightSteelBlue() {
        return new RgbColor("LightSteelBlue");
    }
    static get LightYellow() {
        return new RgbColor("LightYellow");
    }
    static get LimeGreen() {
        return new RgbColor("LimeGreen");
    }
    static get Linen() {
        return new RgbColor("Linen");
    }
    static get Maroon() {
        return new RgbColor("Maroon");
    }
    static get MediumAquaMarine() {
        return new RgbColor("MediumAquaMarine");
    }
    static get MediumBlue() {
        return new RgbColor("MediumBlue");
    }
    static get MediumOrchid() {
        return new RgbColor("MediumOrchid");
    }
    static get MediumPurple() {
        return new RgbColor("MediumPurple");
    }
    static get MediumSeaGreen() {
        return new RgbColor("MediumSeaGreen");
    }
    static get MediumSlateBlue() {
        return new RgbColor("MediumSlateBlue");
    }
    static get MediumSpringGreen() {
        return new RgbColor("MediumSpringGreen");
    }
    static get MediumTurquoise() {
        return new RgbColor("MediumTurquoise");
    }
    static get MediumVioletRed() {
        return new RgbColor("MediumVioletRed");
    }
    static get MidnightBlue() {
        return new RgbColor("MidnightBlue");
    }
    static get MintCream() {
        return new RgbColor("MintCream");
    }
    static get MistyRose() {
        return new RgbColor("MistyRose");
    }
    static get Moccasin() {
        return new RgbColor("Moccasin");
    }
    static get NavajoWhite() {
        return new RgbColor("NavajoWhite");
    }
    static get Navy() {
        return new RgbColor("Navy");
    }
    static get OldLace() {
        return new RgbColor("OldLace");
    }
    static get Olive() {
        return new RgbColor("Olive");
    }
    static get OliveDrab() {
        return new RgbColor("OliveDrab");
    }
    static get Gainsboro() {
        return new RgbColor("Gainsboro");
    }
    static get Orange() {
        return new RgbColor("Orange");
    }
    static get OrangeRed() {
        return new RgbColor("OrangeRed");
    }
    static get Orchid() {
        return new RgbColor("Orchid");
    }
    static get PaleGoldenRod() {
        return new RgbColor("PaleGoldenRod");
    }
    static get PaleGreen() {
        return new RgbColor("PaleGreen");
    }
    static get PaleTurquoise() {
        return new RgbColor("PaleTurquoise");
    }
    static get PaleVioletRed() {
        return new RgbColor("PaleVioletRed");
    }
    static get PapayaWhip() {
        return new RgbColor("PapayaWhip");
    }
    static get PeachPuff() {
        return new RgbColor("PeachPuff");
    }
    static get Peru() {
        return new RgbColor("Peru");
    }
    static get Pink() {
        return new RgbColor("Pink");
    }
    static get Plum() {
        return new RgbColor("Plum");
    }
    static get PowderBlue() {
        return new RgbColor("PowderBlue");
    }
    static get RosyBrown() {
        return new RgbColor("RosyBrown");
    }
    static get RoyalBlue() {
        return new RgbColor("RoyalBlue");
    }
    static get SaddleBrown() {
        return new RgbColor("SaddleBrown");
    }
    static get Salmon() {
        return new RgbColor("Salmon");
    }
    static get SandyBrown() {
        return new RgbColor("SandyBrown");
    }
    static get SeaGreen() {
        return new RgbColor("SeaGreen");
    }
    static get SeaShell() {
        return new RgbColor("SeaShell");
    }
    static get Sienna() {
        return new RgbColor("Sienna");
    }
    static get SkyBlue() {
        return new RgbColor("SkyBlue");
    }
    static get SlateBlue() {
        return new RgbColor("SlateBlue");
    }
    static get SlateGray() {
        return new RgbColor("SlateGray");
    }
    static get Snow() {
        return new RgbColor("Snow");
    }
    static get SpringGreen() {
        return new RgbColor("SpringGreen");
    }
    static get SteelBlue() {
        return new RgbColor("SteelBlue");
    }
    static get Tan() {
        return new RgbColor("Tan");
    }
    static get Teal() {
        return new RgbColor("Teal");
    }
    static get Thistle() {
        return new RgbColor("Thistle");
    }
    static get Tomato() {
        return new RgbColor("Tomato");
    }
    static get Turquoise() {
        return new RgbColor("Turquoise");
    }
    static get Violet() {
        return new RgbColor("Violet");
    }
    static get VioletRed() {
        return new RgbColor("VioletRed");
    }
    static get Wheat() {
        return new RgbColor("Wheat");
    }
    static get WhiteSmoke() {
        return new RgbColor("WhiteSmoke");
    }
    static get YellowGreen() {
        return new RgbColor("YellowGreen");
    }
}
