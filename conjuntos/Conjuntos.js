const text = '1,2,4,3,5,6,a.b!c?e[f';

// Para definir uma classe (ou conjunto) de caracteres usa-se [];
const regexPares = /[02469]/g;
console.log(text.match(regexPares));

const text2 = 'João não vai passear na moto.';
const regexComESemAcento = /n[aã]./g;

console.log(text2.match(regexComESemAcento));