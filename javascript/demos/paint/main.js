// References to DOM elements
const canvas = document.querySelector("canvas");
const toolbar = document.getElementById("toolbar");

// Constants
const colors = ["red", "green", "blue", "yellow", "orange", "pink"];
const figureTypes = [Rectangle, Ellipse];

// Global state
let current = { figure: Rectangle, color: "red" };
let initialPoint;
let preview;
let figures = [];

const pointFromEvent = ({ offsetX: x, offsetY: y }) => ({ x, y });
const pointDifference = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
  width: x2 - x1,
  height: y2 - y1
});

const resize = () => {
  canvas.width = window.innerWidth - 2;
  canvas.height = window.innerHeight - 2 - 40;
};

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

// Events

window.addEventListener("resize", update); // Resize the canvas and repaint every time the window resizes

canvas.addEventListener("click", event => {});

canvas.onmousedown = e => {
  initialPoint = pointFromEvent(e);
  preview = new (current.figure)(
    initialPoint,
    { width: 0, height: 0 },
    current.color
  );
};

canvas.onmousemove = e => {
  if (preview) {
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

// DOM creation (toolbar)

const clearActiveButtons = _class => {
  toolbar.querySelectorAll(`div.${_class}`).forEach(elem => {
    elem.classList.remove("active");
  });
};

const makeColorButton = color => {
  const button = document.createElement("div");
  button.classList.add("color");
  if (color === current.color) {
    button.classList.add('active');
  }
  button.style.backgroundColor = color;
  button.onclick = () => {
    current.color = color;
    clearActiveButtons("color");
    button.classList.add("active");
  };
  return button;
};

const makeFigureButton = figure => {
  const button = document.createElement("div");
  button.classList.add("figure");
  if (figure === current.figure) {
    button.classList.add('active');
  }
  button.textContent = figure.name;
  button.onclick = () => {
    current.figure = figure;
    clearActiveButtons("figure");
    button.classList.add("active");
  };
  console.log(button);
  return button;
};

const createToolbar = () => {
  toolbar.append(...colors.map(makeColorButton));

  const eraseButton = document.createElement("button");
  eraseButton.textContent = "clear";
  eraseButton.onclick = e => {
    figures = [];
    repaint();
  };
  toolbar.appendChild(eraseButton);

  toolbar.append(...figureTypes.map(makeFigureButton));
};

createToolbar();
update();
