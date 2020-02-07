
// However if you move the two calls within an I/O cycle,
// the immediate callback is always executed first

const fs = require('fs');
const print = console.log

fs.readFile(__filename, (err, contents) => {
  setTimeout(() => print('timeout'), 0)
  setImmediate(() => print('immediate'))
  print(contents)
});

// The main advantage to using setImmediate() over setTimeout() is
// setImmediate() will always be executed before any timers if 
// scheduled within an I/O cycle, independently of how many 
// timers are present.