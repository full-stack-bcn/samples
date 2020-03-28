const delayed = (value, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });

Promise.all([
  delayed("first", 1500),
  delayed("second", 1000),
  delayed("third", 500)
]).then(result => console.log(result));
