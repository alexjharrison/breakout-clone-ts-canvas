import { ctx, canvas } from "./canvas";
import { initKeyListener } from "./etc/keysPressed";
import { StateMachine } from "./states/StateMachine";

initKeyListener();

export const gameState = new StateMachine();

ctx.fillStyle = "coral";
let prevTimestamp: number = 0
const tick = (timestamp: number) => {
  const dt = timestamp - prevTimestamp
  prevTimestamp = timestamp

  gameState.run(dt);
  window.requestAnimationFrame(tick);
};

window.requestAnimationFrame(tick);
