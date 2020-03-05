const fs = require("fs");

const readAllLinesOfFile = (filename, fn) => {
  fs.readFile(filename, (err, data) => {
    fn(String(data).split("\n"));
  });
};

readAllLinesOfFile("read-all-lines.js", lines => {
  for (let line of lines) {
    if (line.length > 0) {
      console.log(">", line);
    }
  }
});
