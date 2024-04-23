// requerindo a biblioteca
const readline = require("readline-sync");

function celsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
    // converte de fahrenheit para celsius
}

function fahrenheit(celsius) {
    return (celsius * 9/5) + 32;
    // converte de celsius para fahrenheit
}

// função para receber os dados digitados pelo usuário e exibir o resultado
function conversion() {
    // informa as opções de escolha
    const choiceOption = readline.questionInt(`Escolha a opção:\n1. Converter para Celsius: \n2. Converter para Fahrenheit: \n`);
    // solicita que seja digitado a opção acima
    const temperature = readline.questionFloat("Digite uma temperatura: ");

    if(choiceOption === 1) {
        const result = celsius(temperature);
        console.log("A temperatura em graus Celsius é: ", result.toFixed(2));
        // verifica se a opção 1 foi escolhida, faz a conversão e informa o resultado
    } else if(choiceOption === 2) {
        const result = fahrenheit(temperature);
        console.log("A temperatura em Fahrenheit é: ", result.toFixed(2));
        // verifica se a opção 2 foi escolhida, faz a conversão e informa o resultado
    } else {
        console.log("Deu erro, verifique e tente novamente!");
        // informa que deu erro
    }
}
// chama a função
conversion();
