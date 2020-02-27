const fs = require("fs");

fs.writeFileSync("data.txt", [...Array(1000)].map((_, i) => i).join("\n"));
