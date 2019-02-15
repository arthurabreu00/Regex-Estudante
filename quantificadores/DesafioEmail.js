// Lista de emails

const texto = `

Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com ... 
`;

const regex = /\w*@\w*\.\w{2,}\.? /gi 

console.log(texto.match(regex));