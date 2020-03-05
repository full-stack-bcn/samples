/* Read the contents of the current directory */

const fs = require("fs");
fs.readdir(".", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
