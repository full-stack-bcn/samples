
const fs = require('fs');
const readline = require('readline');

const eachLine = (file, fn) => {
  const reader = readline.createInterface({
    input: fs.createReadStream(file),
  });
  reader.on('line', fn);
}

const print = x => console.log(x);

eachLine('read-lines.js', print);
