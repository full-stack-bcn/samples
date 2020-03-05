
const jsonString = `
{
  "a": 1,
  "b": true,
  "c": "hi",
  "d": [1, 2, 3],
  "e": {
    "first": "James",
    "last": "Bond"
  }
}`;

// JSON.parse reads the JSON format and produces the object represented by it
const jsObj = JSON.parse(jsonString);

console.log(jsObj);