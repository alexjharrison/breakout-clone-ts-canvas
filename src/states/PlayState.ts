import { BaseState } from "./BaseState";
import { Paddle } from "../lib/Paddle";
import { clear } from "../canvas";
import { Ball } from "../lib/Ball";
import { BrickColumn } from "../lib/BrickColumn";
export class PlayState extends BaseState {
  
  private brickColumns: BrickColumn[] = []

  constructor(
    private paddle = new Paddle(),
    private ball = new Ball(),
    ,
    private score = 0
  ) {
    super();
    for (let i = 0; i < 6; i++) {
      this.brickColumns.push(new BrickColumn(i));
    }
  }
  start() {
    console.log("play state started");
  }
  update(dt: number) {
    this.paddle.update(dt);
    this.ball.update(dt);
    this.brickColumns.forEach(brickColumn=>brickColumn.update(dt))

    if (this.ball.hasCollidedWith(this.paddle)) this.ball.reverseY();
    this.brickColumns.map(col=>col.bricks.map(brick=>{
      if(this.ball.hasCollidedWith(brick) && !brick.wasHit) {
        this.ball.reverseY()
        brick.wasHit = true
      }
    }))
  }

  render() {
    clear();
    this.paddle.render();
    this.ball.render();
    this.brickColumns.forEach(brickColumn=>brickColumn.render())
  }

  end() {
    console.log("play state ended");
  }
}
