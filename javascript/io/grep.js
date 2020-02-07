
const fs = require('fs');

const grep = (filename, search, fn) => {
   fs.readFile(filename, (err, data) => {
      if (err) {
         console.error(err.message);
         return;
      }
      String(data).split('\n').forEach(line => {
         if (line.includes(search)) {
            fn(line);
         }
      })
   })
}

grep('grep2.js', 'const', (line) => {
   console.log(line);
});