import { Brick } from "./Brick";

export class BrickColumn {
  public bricks: Brick[] = [];
  constructor(private column: number) {
    const color = generateRandomColor();
    for (let i = 0; i < 6; i++) {
      this.bricks.push(new Brick(column * 164 + 20, i * 26 + 10, color));
    }
  }

  update(dt: number) {
    this.bricks.forEach((brick) => brick.update(dt));
  }
  render() {
    this.bricks.forEach((brick) => {
      if (!brick.wasHit) brick.render();
    });
  }
}

function generateRandomColor(): string {
  const nums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const arr = ["", "", "", "", "", ""];
  return (
    "#" +
    arr
      .map((val, i) => {
        return nums[Math.floor(Math.random() * 16)];
      })
      .join("")
  );
}
