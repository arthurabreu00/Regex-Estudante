// No inicio...
// Um byte (8bits) = 256 caracteres.
// Poucos Símbolos, Pontuação, A-z e 0-9.

// Dois Bytes (16 bits) - 6500+ caracteres
// +Símbolos, +Pontuação. Az e 0-9.

// Unicode
// Quantidade de bytes Variável - Expansível
// Suporte +1.000.000 de Caracteres. 
// Atualmente tem mais de 100.00 Caracteres atribuídos.

// Disponível em : https://unicode-table.com/pt/
const texto = 'aʬc௵d';
console.log(texto.match(/\u02Ac|\u0BF5/g));