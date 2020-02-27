const pr = console.log;
const process = require("process");

pr("begin");
setTimeout(() => pr("timeout0"), 0);
setImmediate(() => pr("setImmediate"), 0);
process.nextTick(() => pr("nextTick"));
pr("finished");
