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
        console.log(`A temperatura em graus Celsius é: ${result.toFixed(2)} graus`);
        return "Temperatura informada acima";
        // verifica se a opção 1 foi escolhida, faz a conversão e informa o resultado
    } else if(choiceOption === 2) {
        const result = fahrenheit(temperature);
        console.log(`A temperatura em Fahrenheit é: ${result.toFixed(2)} graus`);
        return "Temperatura informada acima";
        // verifica se a opção 2 foi escolhida, faz a conversão e informa o resultado
    } else {
        console.log("Deu erro, verifique e tente novamente!");
        return "Temperatura não informada";
        // informa que deu erro
    }
}
// chama a função
// conversion();

// função que recebe os nomes e altera
function changeNames() {
    // passando os nomes
    let names = ["Aysllan", "Kaio", "Rodrigo", "Felipe", "Carlos"];
    // nome atuais
    console.log("Nomes atuais: ", names.join(", "));
    // posição do nome
    const position = readline.questionInt("Qual posição do nome deseja alterar? ");
    // verificando se a posição é válida, começando por 0
    if(position >= 0 && position < names.length) {
        // recebe o novo nome
        const newName = readline.question("Digite um novo nome: ");
        // de acordo com a posição, altera o nome
        names[position] = newName;
        // exibe a lista de nomes atualizada
        console.log("Nomes atualizados: ", names.join(", "));
        // retorna uma mensagem
        return "Alterado com sucesso!";
    } else {
        // se der erro, emite um alerta
        console.log("Posição inválida, tente novamente!");
        // retorna uma mensagem
        return "Verifique e tente novamente!";
    }

}
// chama a função
// changeNames();

// exportanto as funções
module.exports = {celsius, fahrenheit, conversion, changeNames};