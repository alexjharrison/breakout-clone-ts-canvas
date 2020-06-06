export const keysPressed = {};

export const initKeyListener = () => {
  window.addEventListener("keydown", ({ key }) => {
    keysPressed[key] = true;
    console.log(keysPressed)
  });

  window.addEventListener("keyup", ({ key }) => {
    delete keysPressed[key];
    console.log(keysPressed)
  });
};
