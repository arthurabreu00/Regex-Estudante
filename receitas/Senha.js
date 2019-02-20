const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`
// Entre 6 e 20 caracteres.
console.log(texto.match(/^.{6,20}$/gm));

// Se há letra maiúscula.
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))

// Senha complexa
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!^&*]).{6,20}$/gm));

