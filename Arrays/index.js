
// função para calcular
// function calcular(number1, number2) {
//     return 10 + 8;
//     return 10 - 8;
//     return 10 * 8;
//     return 10 / 8;
    
// }

// console.log(`A divisão é: ${calcular()}`);

// função para verificar se um número é par
//  function numberImpar() {
//     const numero = 13;
//    if(numero % 2) {
//        console.log("Número ímpar");
//        } else {
//         console.log("Número par");
//    }
//  }

// numberImpar()

// inserir e remover nomes dos arrays, implementar mensagens para cada elemento
let names = ["Aysllan", "Carlos", "Felipe", "Kaio", "Rodrigo"];
function percorrerArray() {
    let msg = "Seja bem-vindo, ";
    names.forEach(element => {
        console.log(msg, element + "!");
    });
    // const msg = names.join();
    // console.log(`Seja bem-vindo, ${names.join()}`);
    // for(let i = 0; i <= names.length; i++) {
    //     console.log(names.join(msg));
    // }
}
percorrerArray();


// names.shift(); // remove o primeiro elemento do array
// names.push("Bruno"); // adiciona mais um item no array
// console.log(names);


// função para simular o dia a dia
// function simulator() {
//     const almocar = true;
//     if(almocar == true) {
//         console.log("Sair de casa");
//     } else {
//         console.log("Almoçar!");
//     }
// }

// simulator();

