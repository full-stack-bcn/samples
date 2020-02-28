// Backquotes let us insert any expression in a string
let a = 3;
console.log(`a equals ${a}`);
console.log(`a plus one would be ${a + 1}`);

// They also allow line breaks
let lang = "Javascript";
let html = `
<html>
  <body>
    <p>Some HTML inside ${lang}</p>
  </body>
</html>
`;
console.log(html);
