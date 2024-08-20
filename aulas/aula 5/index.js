//1 

/*
let a = 10 variavel "a" inserindo um numero 10

let b = 10 variavel "b" inserindo um numero 10

console.log(b) impressão do console

b = 5 equivalnte da variavel "b" sendo trocado por outro numero 

console.log(a, b)

a função de codígo é transformar á variavel "b" de 10 para 5 e imprimir no console 
*/

/*

let a = 10 variavel a inserindo numero 10

let b = 20 variavel a inserindo numero 20

c = a o valor de "c" agora tera o mesmo valor de "a"

b = c o valor de "b" agora tera o mesmo valor de "c"

a = b o valor de "a" agora tera o mesmo valor de "b"

console.log(a, b, c) imprimindo a variavel de origem "a" "b" "c"
*/

/*

let horasTrabalhadasPorDia = prompt("quantas horas voce trabalha por dia ? ") usa uma variavel para saber quantas horas trablha usando o "prompt" 
let salarioDiario = prompt("quantos voce recebe por dia?") usa uma variavel para saber quanto ela recebe usando "prompt"
console.log("voce receb",salarioDiario,"/",horasTrabalhadasPorDia,"por hora") o console.log daria o resultado

horasTrabalhadasPorDia: Representa a quantidade de horas que o usuário trabalha por dia.
salarioDiario: Representa o valor que o usuário recebe por dia.


*/

//1- declare uma variavel para armazenar um nome, sem atribuir um valor.
let nome;

//2- declare uma variavel para armazenar uma idade, sem atribuir um valor.
let idade;

//3- imprima na tela o tipo dessas variaveis que acabou de criar, usando o comando typeof
console.log(typeof nome); //deve imprimir "undefined"
console.log(typeof idade); //deve imprimir "undefined"


//4- por que esse tipo foi impresso?
// as variaveis nome e idade foram declaradas, mas não foram inicializadas com valores. portatnto, o tipo impresso é "undefined".

//5- pergunte ao usuario seu nome e sua idade , atribuindo esses dois valores às variáveis que acabou de criar
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

// 6. Imprima na tela o tipo dessas variáveis.
console.log(typeof nome);  // Deve imprimir "string"
console.log(typeof idade); // Deve imprimir "string"


//7- Para finalizar, imprima na tela a mensagem: "Olá 'nome', você tem idade anos". Onde 'nome' e 'idade' são os valores que o usuário inseriu.
console.log("ola ${nome}, voce tem ${idade} anos.")


//2- escreva um progama que faça 3 perguntas de Sim ou Não, armazenado em uma varíavel. Por exemplo: "voce está usando uma roupa azul hoje?". Depois, siga os passos: 
("voce costuma usar roupas pretas")
("voce acredita em ET?")
("voce gosta de hamburquer?")

//A) Crie tres novas varíaveis, contendo as respostas 
let roupaspretas= sim 
let ET= não
let hamburguer= sim  

//B) imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo: 
//console.log(voce Costuma usar roupas pretas?roupaspretas)
//console.log(voce acredita em ET?ET)
//console.log(voce gosta de hamburguer?hamburguer)



