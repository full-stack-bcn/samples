// Let's define a normal function that uses the 'this' object.
function myMethod() {
  console.log(`Hi, I'm ${this.name}`);
}

// We create an object with 1 field 'name'
let obj = {
  name: 'Robin'
};

// Now we add a new field to the object which is the function defined earlier
obj.sayHi = myMethod;

// By calling the function with a left object, inside the function 
// the 'this' variable will that object.
obj.sayHi();