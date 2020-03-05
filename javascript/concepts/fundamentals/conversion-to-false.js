
// The following values are converted to false

let num = 0;
if (num) {
  console.log("num is not zero");
} else {
  console.log("num is zero");
}

let s = "";
if (s) {
  console.log("The string has something");
} else {
  console.log("The string is empty");
}

let obj = null;
if (obj) {
  console.log("The object is present");
} else {
  console.log("There is no object");
}

let und; // undefined
if (und) {
  console.log("Variable has some value (not null or 0 or ''!)");
} else {
  console.log("Variable undefined");
}

let x = NaN;
if (x) {
  console.log("The number is valid and not 0");
} else {
  console.log("The value is not valid");
}


