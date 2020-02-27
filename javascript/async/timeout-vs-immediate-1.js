const pr = console.log;
setTimeout(() => pr("timeout"), 0);
setImmediate(() => pr("immediate"));
