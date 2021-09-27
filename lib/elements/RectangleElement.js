import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents a rectangle page element.
 * This class can be used to place rectangles of any size or color on a page.
 */
export class RectangleElement extends Element {

  #fillColorName;

  #borderColorName;

  #borderStyleName;

  #fillColor;

  #borderColor;

  #borderStyle;

  #width;

  #height;

  #borderWidth;

  #cornerRadius;

  /** Gets or sets the width of the rectangle. */
  Width;

  /** Gets or sets the height of the rectangle. */
  Height;

  /** Gets or sets the border width of the rectangle. */
  BorderWidth;

  /** Gets or sets the corner radius of the rectangle. */
  CornerRadius;


  /**
   * Initializes a new instance of the `RectangleElement` class.
   * @param {ElementPlacement} placement The placement of the rectangle on the page.
   * @param {number} width Width of the rectangle.
   * @param {number} height Height of the rectangle.
   */
  constructor(placement, width, height) {
    super(null, placement, width, height)
    this.Placement = placement;
    this.Width = width;
    this.Height = height;
    this._Type = ElementType.Rectangle;
  }

  /** 
   * Gets the `Color` object to use for the fill of the rectangle.
   */
  get FillColor() {
    this.#fillColor;
  }

  /**
   * sets the `Color` object to use for the fill of the rectangle.
   */
  set FillColor(value) {
    this.#fillColor = value;
    this.#fillColorName = this.#fillColor.ColorString;
  }

  /** 
   * Gets the `Color` object to use for the border of the rectangle.
   */
  get BorderColor() {
    this.#borderColor;
  }

  /** sets the `Color` object to use for the border of the rectangle. */
  set BorderColor(value) {
    this.#borderColor = value;
    this.#borderColorName = this.#borderColor.ColorString;
  }

  /** Gets the `LineStyle` object used to specify the border style of the rectangle. */
  get BorderStyle() {
    this.#borderStyle;
  }

  /**sets the `LineStyle` object used to specify the border style of the rectangle. */
  set BorderStyle(value) {
    this.#borderStyle = value;
    this.#borderStyleName = this.#borderStyle.LineStyleString;
  }

  toJSON() {
    return {
      fillColor: this.FillColor,
      borderColor: this.BorderColor,
      borderStyle: this.BorderStyle,
      cornerRadius: this.CornerRadius,
      borderWidth: this.BorderWidth,
      width: this.Width,
      height: this.Height,
      type: this._Type,
      xOffset: this.XOffset,
      yOffset: this.YOffset,
      placement: this.Placement,
      color:this._ColorName
    };
  }
}