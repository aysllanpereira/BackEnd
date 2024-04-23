// requerindo a biblioteca 
const readline = require("readline-sync");

// função para receber e somar os números digitados
function addNumbers() {
    const numbers = [];

    console.log("Digite os números (digite 'fim' para parar):");
    // loop para receber os números
    while (true) {
        // recebe o valor digitado
        const input = readline.question("Digite um número (ou 'fim' para parar): ");
        if (input.toLowerCase() === "fim") {
            break;
            // se for digitado "fim", para o loop
        }
        const number = parseFloat(input); // converte em número 
        if (!isNaN(number)) {
            numbers.push(number); // se o valor digitado for um número irá adicionado no array
        } else {
            console.log("Digite um número válido!"); // se não, irá aparecer uma mensagem de erro
        }
    }

    // soma os números do array
    const sum = numbers.reduce((total, numero) => total + numero, 0);

    // retorna a soma
    return sum;
}

const result = addNumbers();
console.log("A soma dos números é:", result);