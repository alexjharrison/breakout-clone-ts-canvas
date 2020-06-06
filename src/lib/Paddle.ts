import { canvas, ctx } from "../canvas";
import { keysPressed } from "../etc/keysPressed";
import { Rectangle } from "./Rectangle";

export class Paddle extends Rectangle {
  constructor(
    private dx = 0
  ) {
    super(100, 10, 0, 0, "coral")
    this._x = canvas.width / 2 - this.width / 2
    this._y = canvas.height - this.height - 10
  }

  update(dt: number): void {
    this.dx = 0
    if (keysPressed["ArrowLeft"]) this.dx -= .8
    if (keysPressed['ArrowRight']) this.dx += .8

    this._x += this.dx * dt

    this._x = Math.min(this._x, canvas.width - this.width)
    this._x = Math.max(this._x, 0)


  }
}
