
// We have a base class Command, and a Derived class SpecialCommand
class Command { }

class SpecialCommand extends Command {
  constructor(data) {
    super()
    this.data = data
  }
}

// We create two objects, one of each class
let c1 = new Command()
let c2 = new SpecialCommand('x67$%')

// A function that prints different things depending on the class of the 'c'
const showClass_v1 = (c) => {
  if (c instanceof SpecialCommand) {
    console.log(`--> SpecialCommand(${c.data})`);
  } else if (c instanceof Command) {
    console.log("--> Command");
  } else {
    console.log("--> Unknown");
  }
}

// The same function implemented differently
const showClass_v2 = (c) => {
  switch (c.constructor) {
    case SpecialCommand:
      console.log(`--> SpecialCommand(${c.data})`);
      break;
    case Command:
      console.log("--> Command");
      break;
    default:
      console.log("--> Unknown");
  }
}

// Test 1
showClass_v1(c1)
showClass_v1(c2)

// Test 2
showClass_v2(c1)
showClass_v2(c2)


