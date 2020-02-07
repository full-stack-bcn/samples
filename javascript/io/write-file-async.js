/* Write a file with some content */
const fs = require('fs');
fs.writeFile('output.txt', 'This is the content of the file\n', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File saved!');
})
console.log("end");