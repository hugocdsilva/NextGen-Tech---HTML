//1.
console.log("Boas-vindas caro aluno!");
alert("Você está online");

//2.
const nome = "Hugo Correia da Silva";
let idade = 28;
let profissao = "Suporte Técnico";

//const nome = "Hugo";

//3.
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e sou ${profissao}.`);

//4.
console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

//6.
let nota1 = 2;
let nota2 = 10;
let nota3 = 7;
let nota4 = 5;

let alunos = 4;

let result = (nota1 + nota2 + nota3 + nota4)/alunos;

console.log(`A média dos ${alunos} alunos é: ${result}`);

//7.
console.log(10 == "10"); //Esse retornou "True", porque ele só compara se são iguais em relação ao caracter.
console.log(10 === "10"); // Esse retornou "False", porque além de comparar os caracter ele comparou o tipo, o primeiro sendo int e o segundo string.

//8.
let usuario = prompt('Escreva o nome "Hugo" ');

if (usuario == "" || usuario != "Hugo") {
    console.log("Usuário invvalido!");
}

//9.
let idadeUsuario = prompt("Informe a idade para saber se é maior que 18 anos:")

if (idadeUsuario >= 18){
    console.log("Acesso Permitido!")
}
else{
    console.log("Acesso Negado!")
}

//10.
let class_produto = prompt('Classifique o carro da BMW, como A, B ou C. A: "Produto Premium" / B: "Produto Standard" / C: "Produto Econômico"').toUpperCase()
let escolha;

switch (class_produto){

    case "A":
        escolha = console.log("Produto Premium");
        break;
    case "B":
        escolha = console.log("Produto Standard")
        break;
    case "C": 
        escolha = console.log("Produto Econômico")
        break;
    default: 
        escolha = console.log("Categoria Inválida")
}
