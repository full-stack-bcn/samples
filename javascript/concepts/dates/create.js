
// Dates can be created in many ways
let today = new Date();
let date1 = new Date('December 17, 1995 02:37:02');
let date2 = new Date('2020-03-12T12:55:07');
let date3 = new Date(2019, 3, 2);
let date4 = new Date(2019, 11, 31, 23, 59, 59);

// All these dates are stored as UTC, so if you live in 
// a timezone other than 0, you will see a difference
// between the values above and the stored dates.
console.log(today);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);