
class Command { }

class SpecialCommand extends Command {
  constructor(data) {
    super()
    this.data = data
  }
}

let c1 = new Command()
let c2 = new SpecialCommand('x67$%')

const showClass_v1 = (c) => {
  if (c instanceof SpecialCommand) {
    console.log(`--> InsertCommand(${c.data})`);
  } else if (c instanceof Command) {
    console.log("--> Command");
  } else {
    console.log("--> Unknown");
  }
}

const showClass_v2 = (c) => {
  switch (c.constructor) {
    case SpecialCommand:
      console.log(`--> InsertCommand(${c.data})`);
      break;
    case Command:
      console.log("--> Command");
      break;
    default:
      console.log("Nothing...");
  }
}

showClass_v1(c1)
showClass_v1(c2)

showClass_v2(c1)
showClass_v2(c2)


