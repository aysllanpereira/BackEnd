// requerindo a biblioteca
const readline = require("readline-sync");

// função para solicitar que o usuário digite os números
function operations() {
    // recebe os números 
    const number1 = readline.questionFloat("Digite o primeiro número: ");
    const number2 = readline.questionFloat("Digite o segundo número: ");
    // operadores aritméticos 
    const operators = ["+", "-", "x", "/"];
    // exibe os operadores e solicita que o usuário digite um operador
    const operator = readline.keyInSelect(operators, "Escolha uma operação: ");

    // condição que recebe o operador e realiza os cálculos
    switch (operator) {
        case 0:
            console.log(number1 + number2);
            break;
        case 1:
            console.log(number1 - number2);
            break;    
        case 2:
            console.log(number1 * number2);
            break;
        case 3:
            console.log(number1 / number2);
            break;
        default:
            console.log("Deu erro ou foi cancelada!");   
    }

}
// chama a função
operations();