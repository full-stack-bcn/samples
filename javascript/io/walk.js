const { log } = console;
const fs = require("fs");
const path = require("path");

const walkDir = (dir, func) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
      const fullpath = path.join(dir, file);
      fs.stat(fullpath, (err, stats) => {
        if (err) throw err;
        if (stats.isDirectory()) {
          walkDir(fullpath, func);
        } else {
          func(dir, file, stats);
        }
      });
    });
  });
};

const walkDirSync = (dir, fn) => {
  fs.readdirSync(dir).forEach(file => {
    let dirPath = path.join(dir, file);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDirSync(dirPath, fn);
    } else {
      fn(path.join(dir, file));
    }
  });
};

walkDir(".", (dir, file, stats) => {
  log(dir + "/" + file, stats.size);
});
