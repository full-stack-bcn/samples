function addOne(x) {
  x++;
}
function pushOne(x) {
  x.push(1);
}

let x = 5;
let a = [-3, -2, -1, 0];
addOne(x);
console.log(x);
pushOne(a);
console.log(a);
