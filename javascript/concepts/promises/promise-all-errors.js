const delayed = (value, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay);
  });

const failed = delay =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject("fail!"), delay);
  });

Promise.all([
  delayed("first", 1500),
  failed(500),
  delayed("second", 1000),
  delayed("third", 500)
])
  .then(result => console.log(result))
  .catch(error => console.log("Error", error));
