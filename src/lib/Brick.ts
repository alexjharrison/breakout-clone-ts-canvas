import { Rectangle } from "./Rectangle";

export class Brick extends Rectangle {
  constructor(x: number, y: number, color: string, public wasHit = false) {
    super(100, 15, x, y, color);
  }

  update(dt: number) {}
}
