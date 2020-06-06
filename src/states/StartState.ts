import { BaseState } from "./BaseState";
import { keysPressed } from "../etc/keysPressed";
import { gameState } from "../index";
import { ctx, canvas, clear } from "../canvas";

export class StartState extends BaseState {
  constructor() {
    super();
  }
  start() {
    console.log("start state started");
  }
  update(dt: number) {
    if (keysPressed['Enter']) gameState.changeTo("playState")

    clear()
    ctx.font = "50px Comic Sans MS";
    ctx.textAlign = "center"
    ctx.fillStyle = "black"
    ctx.fillText("Press enter to start", canvas.width / 2, canvas.height / 2)
  }
  end() {
    console.log("start state ended");
  }
}
