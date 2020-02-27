const output = require("fs").createWriteStream("./stdout.log");
output.write("some data\n");
output.write("some more data\n");
output.end("final data\n");
