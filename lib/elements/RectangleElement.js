import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
import { ElementPlacement } from "./ElementPlacement.js";

/** Represents a rectangle page element.
 * This class can be used to place rectangles of any size or color on a page.
 */
export class RectangleElement extends Element {

  #fillColorDetail;

  #borderColorDetail;

  #borderStyleDetail;  

  fillColor;

  borderColor;

  borderStyle;

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
    super.Type = ElementType.Rectangle;
  }

  /** 
   * Gets the `Color` object to use for the fill of the rectangle.
   */
  get FillColor() {
    this.#fillColorDetail;
  }

  /**
   * sets the `Color` object to use for the fill of the rectangle.
   */
  set FillColor(value) {
    this.#fillColorDetail = value;
    this.fillColor = this.#fillColorDetail.ColorString;
  }

  /** 
   * Gets the `Color` object to use for the border of the rectangle.
   */
  get BorderColor() {
    this.#borderColorDetail;
  }

  /** sets the `Color` object to use for the border of the rectangle. */
  set BorderColor(value) {
    this.#borderColorDetail = value;
    this.borderColor = this.#borderColorDetail.ColorString;
  }

  /** Gets the `LineStyle` object used to specify the border style of the rectangle. */
  get BorderStyle() {
    this.borderStyle;
  }

  /**sets the `LineStyle` object used to specify the border style of the rectangle. */
  set BorderStyle(value) {
    this.#borderStyleDetail = value;
    this.borderStyle = this.#borderStyleDetail.LineStyleString;
  }
}