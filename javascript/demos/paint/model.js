class Figure {
  constructor(origin, size, color) {
    this.origin = origin;
    this.size = size;
    this.color = color;
  }

  setFillStyle(ctx) {
    ctx.fillStyle = this.color;
  }

  paint(ctx) {
    throw new Error("Calling Figure.paint directly!");
  }
}

class Rectangle extends Figure {
  paint(ctx) {
    const {
      origin: { x, y },
      size: { width, height }
    } = this;

    this.setFillStyle(ctx);
    ctx.fillRect(x, y, width, height);
  }

  static iconURL = "rect.svg";
}

class Ellipse extends Figure {
  paint(ctx) {
    const {
      origin: { x, y },
      size: { width, height }
    } = this;
    this.setFillStyle(ctx);
    if (width >= 0 && height >= 0) {
      ctx.beginPath();
      ctx.ellipse(x, y, width, height, 0, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
