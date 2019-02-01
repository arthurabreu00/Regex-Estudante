
const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Quantificadores por padrão SÃO Gulosos (Greedy)...
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// Quantificadores NÃO Gulosos (Lazy)...
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));
