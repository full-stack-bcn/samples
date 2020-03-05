const fs = require("fs");
const http = require("http");

http.get("http://nodejs.org/dist/index.json", res => {
  let data = "";
  res.on("data", chunk => (data += chunk));
  res.on("end", () => {
    fs.writeFileSync("index.json", data);
    fs.writeFile("index.json", data, err => {
      if (err) {
        console.error(err.toString());
        return;
      }
      console.log("Saved!");
    });
  });
});
