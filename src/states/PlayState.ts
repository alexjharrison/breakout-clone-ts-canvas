import { BaseState } from "./BaseState";
import { Paddle } from "../lib/Paddle";
import { clear } from "../canvas";
import { Ball } from "../lib/Ball";
export class PlayState extends BaseState {
  constructor(
    private paddle = new Paddle(),
    private ball = new Ball(),
    private score = 0
  ) {
    super();
  }
  start() {
    console.log("play state started");
  }
  update(dt: number) {
    this.paddle.update(dt)
  }

  render() {
    clear()
    this.paddle.render()
    this.ball.render()
  }

  end() {
    console.log("play state ended");
  }

}
