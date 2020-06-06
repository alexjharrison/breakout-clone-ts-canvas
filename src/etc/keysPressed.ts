export const keysPressed = {};

export const initKeyListener = () => {
  window.addEventListener("keydown", ({ key }) => {
    keysPressed[key] = true;
  });

  window.addEventListener("keyup", ({ key }) => {
    delete keysPressed[key];
  });
};
