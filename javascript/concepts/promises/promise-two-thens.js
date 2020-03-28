
const P = new Promise((resolve, reject) => {
  console.log("enter");
  resolve(42);
  console.log("leave");
});

// Two functions will be called when this promise resolves
P.then((x) => console.log("first", x));
P.then((x) => console.log("second", x));
