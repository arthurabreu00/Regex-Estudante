const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // Não define um range
console.log(texto.match(/[A-z]/g)) // Utiliza a ordenação da tabela UNICODE.

// Deverá seguir uma certa ordem, se não, ocorrerá erros.
// console.log(texto.match(/[a-Z]/g)); 
// console.log(texto.match(/[4-1]/g)); 
// console.log(texto.match(/[Z-a]/g)); 