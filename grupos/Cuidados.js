const texto = 'Pedrinha (filho do Pedro Silva) é doutor do ABC';

console.log(texto.match(/[(abc)]/gi)); // Isso não é um grupo.
console.log(texto.match(/([abc])/gi)); // Isto é um grupo.