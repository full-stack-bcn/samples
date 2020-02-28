// Since a function is an object, you can ask for its name

function f1() {
  console.log("You called f1");
}

const f2 = function() {
  console.log("You called f2");
};

const f3 = f2;

const f4 = [
  function() {
    console.log("You called f4");
  }
];

// A 'named' function has an obvious name
console.log(f1.name);

// An anonymous function also gets a name (it is cleverly deduced by Javascript)
console.log(f2.name);

// What about a copy of f2?
console.log(f3.name);

// The name is emtpy in this case (Javascript couldn't deduce it)
console.log(`"${f4[0].name}"`);
