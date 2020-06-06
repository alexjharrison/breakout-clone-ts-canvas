import { PlayState } from "./PlayState";
import { StartState } from "./StartState";
import { BaseState } from "./BaseState";

export enum States {
  playState = "playState",
  startState = "startState",
}

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
  }

  changeTo(newState: States): void {
    this.currentState.end();
    this.currentState = this[newState];
    this.currentState.start();
  }
}
