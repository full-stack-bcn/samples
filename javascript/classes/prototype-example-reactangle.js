let figure = {
  area() {
    return this.width * this.height;
  }
};
function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
Rectangle.prototype = figure;

let r = new Rectangle(0, 0, 80, 45);
console.log(r.area());
