class Figure {
  constructor(origin, size, color) {
    this.origin = origin;
    this._size = size;
    this.color = color;
  }

  set size({ width, height }) {
    this._size = { width, height };
  }

  paint(ctx) {
    throw new Error('Calling Figure.paint directly!');
  }
}

class Rectangle extends Figure {
  paint(ctx) {
    const {
      origin: { x, y },
      _size: { width, height }
    } = this;

    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, width, height);
  }

  static iconURL = "rect.svg";
}
