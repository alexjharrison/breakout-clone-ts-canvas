interface Dictionary {
  [Key: string]: boolean;
}

export const keysPressed: Dictionary = {};

export const initKeyListener = () => {
  window.addEventListener("keydown", (evt: KeyboardEvent) => {
    keysPressed[evt.key] = true;
    console.log(keysPressed);
  });

  window.addEventListener("keyup", (evt: KeyboardEvent) => {
    delete keysPressed[evt.key];
    console.log(keysPressed);
  });
};
