const texto = "Bom\ndia";

console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi)); // O Ponto não engloba o \n.

// DotAll - algumas linguagens tem um flag /exp/s, mas o JS não !


