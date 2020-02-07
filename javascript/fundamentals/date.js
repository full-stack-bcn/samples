let now = new Date();
let Feb1st = new Date(2018, 1, 1);
console.log(`Difference in ms: ${now - Feb1st}`);

if (now > Feb1st) {
    console.log("after!");
}

const isInThePast = (d) => {
    let now = new Date();
    return d < now;
}

console.log(isInThePast(new Date(2030, 0, 1)));