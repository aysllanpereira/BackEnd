// requerindo a biblioteca
const readline = require("readline-sync");
console.log("Seja bem-vindo! Tente adivinhar o número secreto!");
const name = readline.question("Digite seu nome: ");

// função para gerar um número aleatório entre o minimo que é 1 e o máximo que é 100
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função principal para solicitar o número ao usuário, verificar se é o certo e exibir os resultados 
function searchNumber() {
    // gerando um número aleatório entre 1 e 100
    const number = generateNumber(1, 100);
    let numberAttempts = 0; // inicia o contador de tentativas em 0
    let numberHits = 0; // inicia o número de acertos em 0

    // loop para verificar se o número digitado é igual ao número secreto
    while (numberHits !== number) {
        // solicita que seja digitado o número
        numberHits = readline.questionInt(`${name}, digite um número para tentar adivinhar o número (entre 1 e 100): `);

        // se o número for menor que 1 (0) ou maior que 100 (101), informa mensagem de erro
        if (numberHits < 1 || numberHits > 100) {
            console.log("Número inválido, digite um número entre 1 e 100");
        }

        numberAttempts++; // incrementa o contador de tentativas

        // se o número digitado for igual ao número secreto, informa que o usuário acertou
        if (numberHits === number) {
            console.log(`Parabéns, ${name}! Você acertou!\n O número sorteado foi ${number}.\n Após ${numberAttempts} tentativas!`);
        } else if (numberHits < number) {
            // se o número secreto for menor, informa que deve tentar um número maior
            console.log("Tente um número maior!");
        } else {
            // se o número secreto for maior, informa que deve tentar um número menor
            console.log("Tente um número menor!");
        }
    
    }

}

// chama a função
searchNumber();