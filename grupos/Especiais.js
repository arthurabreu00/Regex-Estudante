const texto = 'João é calmo, mas no trânsito fica nervoso.';

console.log(texto.match(/[\wÁ-ú]+/gi));

// Positive lookahead (Olhando para frente)
console.log(texto.match(/[\wÁ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÁ-ú]+(?=\.)/gi));

// Negative lookhead (NÃO olhe para a frente).
console.log(texto.match(/[\wÁ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÁ-ú]+[\s]|\.](?!,)/gi));