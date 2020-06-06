import { BaseState } from "./BaseState";
import { Paddle } from "../lib/Paddle";
export class PlayState extends BaseState {
  constructor(private paddle: Paddle = new Paddle()) {
    super();
  }
  start() {
    console.log("play state started");
  }
  update() {}

  end() {
    console.log("play state ended");
  }

  render() {}
}
