const process = require("process");
const pr = console.log;

pr("inicio");

function Fa() {
  pr('Estoy en la función "a"');
}

setImmediate(() => pr("immediate"));
setTimeout(() => pr("timeout 0"), 0);
process.nextTick(() => pr("next tick"));

Fa();
pr("fin");
