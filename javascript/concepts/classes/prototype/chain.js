const print = console.log;
const makePrinter = msg => () => print(msg);

let animal = {
  walk() {
    print("A " + this.type + " is walking");
  },
  type: "animal"
};
let dinosaur = {
  talk: makePrinter("Roar"),
  __proto__: animal,
  type: "dinosaur"
};
let tRex = {
  hunt: makePrinter("Hunting you!"),
  __proto__: dinosaur,
  type: "T.Rex"
};

tRex.walk();
tRex.talk();
tRex.hunt();
