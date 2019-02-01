const texto = 'O João recebeu 120 Milhões apostando 6 9 21 23 45 46';

// Para definir um quantificador usa-se {}.
console.log(texto.match(/\d{1,2}/g));
console.log(texto.match(/[0-9]{2}/g));
console.log(texto.match(/\d{1,}/g));

console.log(texto.match(/\w{7}/g));
console.log(texto.match(/[\wõ]{7,}/g));