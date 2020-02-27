let spy = {
  name: "James Bond"
};

let trueMap = new Map();
let objMap = {};

trueMap.set(spy, "works");
objMap[spy] = "does not work so well";

console.log(trueMap);
console.log(objMap);
