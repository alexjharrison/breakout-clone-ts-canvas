const getCanvasById = (id: string = "canvas"): HTMLCanvasElement => {
  const canvas = document.getElementById(id);
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error();
  }
  return canvas;
};

const canvas = getCanvasById();
canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");

const clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export { canvas, ctx, clear };
