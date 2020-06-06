export class BaseState {
  constructor() {}

  start() {}
  change(): string {
    return null;
  }
  update(dt: number) {}
  render() {}
  end() {}
}
