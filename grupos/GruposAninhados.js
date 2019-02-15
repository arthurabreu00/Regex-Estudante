const texto = 'Supermercado hipermercado minimercado mercado';

console.log(texto.match(/(super|hiper|mini)?mercado/gi));
console.log(texto.match(/((hi|su)per|mini)?mercado/gi));
