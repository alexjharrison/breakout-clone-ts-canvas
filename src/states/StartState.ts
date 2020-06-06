import { BaseState } from "./BaseState";

export class StartState extends BaseState {
  constructor() {
    super();
  }
  start() {
    console.log("start state started");
  }
  update(dt: number) {}
  end() {
    console.log("start state ended");
  }
}
