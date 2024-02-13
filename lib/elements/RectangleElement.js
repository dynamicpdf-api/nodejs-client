import { Element } from "./Element.js";
import { elementType } from "./ElementType.js";
import { elementPlacement } from "./ElementPlacement.js";

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
  width;

  /** Gets or sets the height of the rectangle. */
  height;

  /** Gets or sets the border width of the rectangle. */
  borderWidth;

  /** Gets or sets the corner radius of the rectangle. */
  cornerRadius;


  /**
   * Initializes a new instance of the `RectangleElement` class.
   * @param {ElementPlacement} placement The placement of the rectangle on the page.
   * @param {number} width Width of the rectangle.
   * @param {number} height Height of the rectangle.
   */
  constructor(placement, width, height) {
    super(null, placement, width, height)
    this.placement = placement;
    this.width = width;
    this.height = height;
    this._Type = elementType.rectangle;
  }

  /** 
   * Gets the `Color` object to use for the fill of the rectangle.
   */
  get fillColor() {
    this.#fillColor;
  }

  /**
   * sets the `Color` object to use for the fill of the rectangle.
   */
  set fillColor(value) {
    this.#fillColor = value;
    this.#fillColorName = this.#fillColor.colorString;
  }

  /** 
   * Gets the `Color` object to use for the border of the rectangle.
   */
  get borderColor() {
    this.#borderColor;
  }

  /** sets the `Color` object to use for the border of the rectangle. */
  set borderColor(value) {
    this.#borderColor = value;
    this.#borderColorName = this.#borderColor.colorString;
  }

  /** Gets the `LineStyle` object used to specify the border style of the rectangle. */
  get borderStyle() {
    this.#borderStyle;
  }

  /**sets the `LineStyle` object used to specify the border style of the rectangle. */
  set borderStyle(value) {
    this.#borderStyle = value;
    this.#borderStyleName = this.#borderStyle.lineStyleString;
  }

  toJSON() {
    return {
      fillColor: this.#fillColorName,
      borderColor: this.#borderColorName,
      borderStyle: this.#borderStyleName,
      cornerRadius: this.cornerRadius,
      borderWidth: this.borderWidth,
      width: this.width,
      height: this.height,
      type: this._Type,
      xOffset: this.xOffset,
      yOffset: this.yOffset,
      placement: this.placement,
      color:this._ColorName
    };
  }
}