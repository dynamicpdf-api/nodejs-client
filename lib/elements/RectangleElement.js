import { Element } from "./Element.js";
import { ElementType } from "./ElementType.js";
export class RectangleElement extends Element {
  Width;
  Height;
  BorderWidth;
  CornerRadius;
  #fillColorDetail;
  #borderColorDetail;
  #borderStyleDetail;
  fillColor;
  borderColor;
  borderStyle;
  Type = ElementType.Rectangle;
  constructor(placement, width, height) {
    super(null, placement, width, height)
    this.Placement = placement;
    this.Width = width;
    this.Height = height;
  }
  get FillColor() {
    this.#fillColorDetail;
  }
  set FillColor(value) {
    this.#fillColorDetail = value;
    this.fillColor = this.#fillColorDetail.ColorString;
  }
  get BorderColor() {
    this.#borderColorDetail;
  }
  set BorderColor(value) {
    this.#borderColorDetail = value;
    this.borderColor = this.#borderColorDetail.ColorString;
  }
  get BorderStyle() {
    this.borderStyle;
  }
  set BorderStyle(value) {
    this.#borderStyleDetail = value;
    this.borderStyle = this.#borderStyleDetail.LineStyleString;
  }
}