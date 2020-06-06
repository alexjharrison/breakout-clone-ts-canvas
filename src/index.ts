import { ctx, canvas } from "./canvas";
import { initKeyListener } from "./etc/keysPressed";
import { StateMachine } from "./states/StateMachine";

initKeyListener();

const stateMachine = new StateMachine();

let ticks = 0;
ctx.fillStyle = "coral";
const tick = (timestamp: number) => {
  stateMachine.run(ticks++);
  window.requestAnimationFrame(tick);
};

window.requestAnimationFrame(tick);
