import { PlayState } from "./PlayState";
import { StartState } from "./StartState";
import { BaseState } from "./BaseState";

const states = ["playState", "startState"];

export class StateMachine {
  constructor(
    private playState = new PlayState(),
    private startState = new StartState(),
    private currentState: BaseState = startState
  ) {
    this.startState.start();
  }

  run(dt: number): void {
    this.currentState.update(dt);
    this.currentState.render();
    const newState = this.currentState.change();
    if (newState) this.changeTo(newState);
  }

  changeTo(newState: string): void {
    if (states.indexOf(newState) < 0) throw new Error("Not a valid State");

    this.currentState.end();
    this.currentState = this[newState];
    this.currentState.start();
  }
}
