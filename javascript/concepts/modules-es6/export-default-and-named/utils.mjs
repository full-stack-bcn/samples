export function fa() {
  console.log("This is function 'fa'");
}

export function fb() {
  console.log("This is function 'fb'");
}

// This function does not need a name because it will be given by the import
// statement
export default function () {
  console.log("This is the 'default' function");
}