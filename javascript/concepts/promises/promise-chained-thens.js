const P = new Promise((resolve, reject) => {
  resolve(42);
});

// The 'then' method checks to see if the function you provide returns a Promise
// and if it doesn't, it creates one directly resolving to the value you
// returned.
P.then(x => x + 8)
  .then(x => x * 2)
  .then(x => console.log(x));
