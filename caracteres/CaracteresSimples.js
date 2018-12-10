const texto = '1,2,3,4,5,6,a.b c!d7e';
const regexVirgula = /,/;

console.log(texto.split(regexVirgula));
console.log(texto.match(regexVirgula));

console.log(texto.split(/,/g));
console.log(texto.match(/A/ig));
console.log(texto.match(/2/g));
console.log(texto.match(/b c!d/));