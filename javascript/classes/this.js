function getName() {
  return this.name;
}

function point(x, y) {
  this.x = x;
  this.y = y;
}

point.prototype.norm = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

let p = new point(2, 3);
console.log(p);
console.log(p.norm());

let obj = {
  name: "paueky",
  getName
};
console.log(obj.getName());
console.log(obj.prototype);
