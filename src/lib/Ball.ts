import { canvas } from "../canvas";
import { Rectangle } from "./Rectangle";

export class Ball extends Rectangle {
  constructor(private dy: number = 0, private dx: number = 0) {
    super(10, 10, canvas.width / 2, canvas.height / 2, "red");

    this.dy = Math.random() * 2 - 1;
    this.dx = Math.random() * 2 - 1;
  }

  update(dt: number) {
    if (this.x < 0 || this.x > canvas.width - this.width) this.dx *= -1;
    if (this.y < 0) this.dy *= -1;

    this._x += this.dx * dt;
    this._y += this.dy * dt;

    if (this.y > canvas.height - this.height) this.reset();
  }

  reverseX() {
    this.dx *= -1;
  }
  reverseY() {
    this.dy *= -1;
  }

  reset() {
    this._x = canvas.width / 2;
    this._y = canvas.height / 2;
    this.dy = Math.random() * 2 - 1;
    this.dx = Math.random() * 2 - 1;
  }
}
