// Puedo crear un método de dos maneras
// 1. con sintaxis de método
// 2. como un campo más (pero con 'function')
let obj = {
  name: "A certain obj",
  method1() {
    console.log(`I'm ${this.name} (1)`);
  },
  method2: function() {
    console.log(`I'm ${this.name} (2)`);
  }
};

obj.method1();
obj.method2();

// 3. Como una función normal que luego se transforma en método.
function someFunction() {
  console.log(`I'm ${this.name} (3)`);
}

obj.method3 = someFunction;
obj.method3();
