"use strict";

let animal = {
  name: "Rufus",
  weight: 21.5,
  hasFur: true,
};
for (let prop in animal) {
  console.log(prop, animal[prop]);
}