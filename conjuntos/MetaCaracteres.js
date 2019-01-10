const texto = '.$+*?-';

console.log(texto.match(/[.]/g)); // Não precisa de escape dentro do conjunto.

console.log(texto.match(/[$-?]/g)); // Isso é um intervalo.

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

// Podem precisar de escape dentro do conjunto: - [] ^.

