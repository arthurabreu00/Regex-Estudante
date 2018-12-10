const texto = 'Casa bonita é casa amarela da esquina com a rua ACASALAR.';
const regex = /casa/g;

// O metodo match é o padrão para execução e aprendizados de regex. ele retorna oque foi passada como parametro.
console.log(texto.match(regex)); 
console.log(texto.match(/a b/)); // Procurando palavras que terminam com a e em seguida comecem com b.