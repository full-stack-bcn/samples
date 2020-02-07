
const { log, error } = console;
const fs = require('fs');
const path = require('path');

// fs.readdir
// fs.stat -> .isDirectory
// path.join

const walk = (dir, func) => {
   fs.readdir(dir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
         const fullpath = path.join(dir, file);
         fs.stat(fullpath, (err, stats) => {
            if (err) throw err;
            if (stats.isDirectory()) {
               walk(fullpath, func);
            } else {
               func(dir, file, stats);
            }
         });
      })
   })
}

walk('/home/pauek/src/bash', (dir, file, stats) => {
   log(dir + "/" + file, stats.size);
});
