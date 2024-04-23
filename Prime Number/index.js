// requerindo a biblioteca
const readline = require("readline-sync");

// função para verificar se o número é primo ou não
function primeNumber() {
    // recebe o número
    const number = readline.questionFloat("Digite um número: ");
    let dividers = 0; // divisores começa em 0
    // verifica se o número é primo, let começa em 2 pois 1 não é primo
    for(let i = 2; i <= number; i++) {
        if(number % i == 0) {
            dividers++; // se o número for divisível, o contador aumenta
        }
    }
    // se o contador for 1, o número é primo
    if(dividers === 1) {
        console.log(`O número ${number} é primo!`);
    } else {
        console.log(`O número ${number} não é primo!`);
        // exibe a mensagem informando que não é primo
    }
}
// chama a função
primeNumber();