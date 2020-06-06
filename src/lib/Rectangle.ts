import { ctx } from "../canvas";

export class Rectangle {
  constructor(
    public readonly width: number,
    public readonly height: number,
    protected _x: number,
    protected _y: number,
    private color: string
  ) {}

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  hasCollidedWith(object: Rectangle) {
    const insideX =
      this.x + this.width > object.x && this.x < object.x + object.width;
    const insideY =
      this.y + this.height > object.y && this.y < object.y + object.height;

    return insideX && insideY;
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this._x, this._y, this.width, this.height);
  }
}
