// requerindo a biblioteca
const readline = require("readline-sync");

function dados() {
    const name = readline.question("Qual seu nome? ");
    const age = readline.questionInt("Qual sua idade? ");
    const weight = readline.questionFloat("Qual seu peso? ");
    
    if(name !== "" && age >= 18 && weight > 50) {
        console.log(`Olá, ${name}! Você tem ${age} anos, já é maior de idade e pesa ${weight}kg!`);
        return;
    } else {
        console.log(`Erro!`);
        return;
    }
}

dados();