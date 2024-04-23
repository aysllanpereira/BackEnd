// requerindo a biblioteca
const readline = require("readline-sync");

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
    } else {
        // se der erro, emite um alerta
        console.log("Posição inválida, tente novamente!");
    }

}
// chama a função
changeNames();