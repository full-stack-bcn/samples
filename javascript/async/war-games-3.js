
/* 

Escribe un programa que muestra las letras de:

  You should know that professor.
  You programmed me.

con una diferencia de 100 milisegundos entre letra y letra.
Para los saltos de línea, añade 700 milisegundos extra.

*/

const texto = `
You should know that, professor.
You programmed me.
`;

[...texto].forEach((c, i, array) => {
  const numEndls = array.slice(0, i).filter(c => c === '\n').length
  setTimeout(() => process.stdout.write(c), i * 100 + numEndls * 700)
})