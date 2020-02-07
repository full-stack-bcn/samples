
let obj1 = {
  x: 1,
  showX() {
    console.log(this.x)
  }
}

let obj2 = {
   x: 2,
   showX: () => console.log(this.x)
};

obj1.showX();
obj2.showX();
