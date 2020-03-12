
class MyData {
  constructor(x) {
    // error here... there is no setter
    this.field = x;
  }
  get field() { return this.__field; }
}

try {
  const d = new MyData(1);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}