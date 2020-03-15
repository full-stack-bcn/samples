const canvas = document.querySelector("canvas");

const resize = () => {
  canvas.width = window.innerWidth - 2;
  canvas.height = window.innerHeight - 2 - 40;
};

let preview;
let figures = [];
let currentColor = "red";

const repaint = () => {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  figures.forEach(f => f.paint(ctx));
  if (preview) {
    preview.paint(ctx);
  }
};

const update = () => {
  resize();
  repaint();
};

update();

// Resize the canvas and repaint every time the window resizes
window.addEventListener("resize", update);

canvas.addEventListener("click", event => {});

const pointFromEvent = ({ offsetX, offsetY }) => ({ x: offsetX, y: offsetY });
const pointDifference = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
  width: x2 - x1,
  height: y2 - y1
});

let initialPoint;
canvas.onmousedown = e => {
  initialPoint = pointFromEvent(e);
  preview = new Rectangle(initialPoint, { width: 0, height: 0 }, currentColor);
};
canvas.onmousemove = e => {
  if (preview) {
    const currentPoint = ;
    preview.size = pointDifference(initialPoint, pointFromEvent(e));
    repaint();
  }
};
canvas.onmouseup = e => {
  figures.push(preview);
  repaint();
  initialPoint = null;
  preview = null;
};

const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
const figureTypes = [Rectangle]; //, Line, Ellipse];

const makeColorButton = color => {
  const button = document.createElement("div");
  button.classList.add("color");
  button.style.backgroundColor = color;
  button.onclick = () => {
    currentColor = color;
    console.log(currentColor);
  };
  return button;
};

const createToolbar = () => {
  const toolbar = document.getElementById("toolbar");
  toolbar.append(...colors.map(makeColorButton));

  const eraseButton = document.createElement("button");
  eraseButton.textContent = "clear";
  eraseButton.onclick = e => {
    figures = [];
    repaint();
  };
  toolbar.appendChild(eraseButton);
};

createToolbar();
