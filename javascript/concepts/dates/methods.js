
const date = new Date(2000, 0, 1);

// Logging the date directly shows the internal UTC format
console.log(date);

// But the methods recalculate the date using the timezone
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

// And converting it to a string also shows a local date
console.log(date.toString());
