// requerindo a biblioteca
const readline = require("readline-sync");

function passwordGenerator() {
    // recebe o número digitado pelo usuário
    const number = readline.questionInt("Digite o tamanho desejado da senha: ");
    // caracteres 
    const caracters = ["A", "B", "C", "D", "E", "F", 
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", ";", ":", "'",",", ".", "`", "~"];
    
    // senha começa vazia
    let password = "";
    
    // comeca em 0 e enquanto for menor que o número digitado incrementa mais um
    for(let i = 0; i < number; i++) {
        // nova senha é gerada aleatórioamente com o tamanho do array
        const newPassword = Math.floor(Math.random() * caracters.length);
        // console.log(newPassword)
        // a senha é concatenada com os caracteres e nova senha
        password += caracters[newPassword];
    }

    // exibe a nova senha
    console.log("A senha gerara é: ", password);
}

// chama a função
passwordGenerator();