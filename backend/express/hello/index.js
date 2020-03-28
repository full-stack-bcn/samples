// 1. Load the 'express' module
const express = require("express");

// 2. Create a new express server by calling express
const app = express();
const PORT = 3000; // Keep the port in a read-only variable

// 3. Set up a '/' route (a function receiving a request and returing a reponse)
app.get("/", (request, response) => {
  response.send("Hello, World!");
});

// 4. Start the server listening on the PORT
app.listen(PORT, () => {
  console.log(`Hello world server listening on port ${PORT}`)
})

// 5. Run it with either of these commands:
//   $ node .
//   $ npm start

// 6. Open a browser at http://localhost:3000/
//    (also try http://localhost:3000/xyz)
