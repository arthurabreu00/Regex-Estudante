const texto = `1,2,4,3,5,6,a.b!c?e\r	-
f_g`;

console.log(texto.match(/\d/g)); // Números.
console.log(texto.match(/\D/g)); // Não-Números.

console.log(texto.match(/\w/g)); // Caracteres [a-zA-Z0-9_].
console.log(texto.match(/\W/g)); // O Contrario do acima - Não caracteres Caracteres [^a-zA-Z0-9_].

console.log(texto.match(/\s/g)) // Espaços vazios [ \t\n\r\f].
console.log(texto.match(/\S/g)) // Não espaços vazios [^ \t\n\r\f].

// Também existem o \b \B para bordas de palavras.