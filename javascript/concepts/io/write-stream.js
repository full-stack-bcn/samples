const fs = require("fs");

const stream = fs.createWriteStream("stream.txt");
stream.once("open", fd => {
  stream.write("First line\n");
  stream.write("Second line\n");
  stream.end();
});
