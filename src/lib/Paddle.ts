import { canvas, ctx } from "../canvas";
import { keysPressed } from "../etc/keysPressed";

export class Paddle {
  private _x: number;
  private _y: number;
  constructor(
    public readonly width = 100,
    public readonly height = 10,
    private dx = 0
  ) {
    this._x = canvas.width / 2 - this.width / 2
    this._y = canvas.height - this.height - 10
  }

  get x() {
    return this._x
  }
  get y() {
    return this._y
  }

  update(dt: number): void {
    this.dx = 0
    if (keysPressed["ArrowLeft"]) this.dx -= 5
    if (keysPressed['ArrowRight']) this.dx += 5

    this._x += this.dx

    this._x = Math.min(this._x, canvas.width - this.width)
    this._x = Math.max(this._x, 0)


  }
  render(): void {
    ctx.fillStyle = "coral"
    ctx.fillRect(this._x, this._y, this.width, this.height)
  }
}
