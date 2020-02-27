function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.area = function() {
  return 2 * Math.PI * this.radius;
};

let c = new Circle(0, 0, 30);
console.log(c.area());
