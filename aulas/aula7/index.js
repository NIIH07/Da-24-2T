/*const primeiroValor = false
const segundoValor = true 

const resultado =  primeiroValor&& segundoValor

console.log(resultado) 
*/
/*
const a = true 
const b = false 
const c = true 

 const resultado = a && b 

console.log(resultado)


const resultado1 = b && c 

console.log(resultado1)

const resultado2 = a && c 

console.log(resultado2)

const resultado3 = a && b && c 

console.log(resultado3)
*/

/*
const primeiroValor = true 
const segundoValor = true 

const resultado = primeiroValor || segundoValor

console.log(resultado)

const a = true 
const b = false 
const c = true 

const resultado1 = a || b 
console.log(resultado)

const resultado2 = b || c 
console.log(resultado2)

const resultado3 = a || c 
console.log(resultado3)

const resultado4 = a || b || c 
console.log(resultado4)
*/

/*
const primeiroValor = false
const resultado = !primeiroValor
console.log(resultado)
*/

/*
const nome = prompt ("qual o seu nome ?")
console.log("nome" , nome )

const anoNasci = prompt ("qual o teu ano de nascimento?")
console.log("anoNasci" , anoNasci)

const anoAtual = prompt ("qual o seu ano atual?")
const idade = anoAtual - anoNasci
console.log("idade" ,idade)

const maiorIdade = idade<16
console.log("é maior de Idade?" ,maiorIdade)
const diferençaAnos = 2050 - anoAtual 
console.log("idade em 2050" , idade + diferençaAnos)
*/

/* exercicio 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // 'bool1' é true e o 'bool2' e falsse então bool1 && bool2 e false
console.log("a. ", resultado) // impressão "a. false"

resultado = bool1 && bool2 && bool3 // bool1 && bool2 é false, e bool3 é igual a bool2 (que é false), então false && false é false.
console.log("b. ", resultado) // impressão "b. false"

resultado = !resultado && (bool1 || bool2) // resultado é false, e bool1 || bool2 é true (porque bool1 é true).false && truw w false
console.log("c. ",resultado) // impressão "c. false"

console.log("d. ", typeof resultado) // resultado é false, que é do tipo boolean. 
// impressão "d. boolean"

*/
// exercicio de escrita 1


/*
// Pergunta a idade do usuário
let idadeUsuario = parseInt(prompt("Qual é a sua idade?"));

// Pergunta a idade do melhor amigo ou amiga
let idadeAmigo = parseInt(prompt("Qual é a idade do seu melhor amigo ou amiga?"));

// Verifica se a idade do usuário é maior que a do amigo
const idadeMaior = idadeUsuario > idadeAmigo;

// Imprime a resposta se a idade do usuário é maior
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior);

// Calcula e imprime a diferença de idade
const diferencaIdade = idadeUsuario - idadeAmigo;
console.log("Diferença de idade:", diferencaIdade);

*/

// exercicio de escrita 2

/*
// a) Solicitar ao usuário que insira um número par
numero = prompt("Por favor, insira um número par: ")
// b) Imprimir o resto da divisão desse número por 2
resto = numero % 2
console.log("O resto da divisão do número por 2 é:", resto)
// c) Teste do programa
//  Para números pares, o resto da divisão por 2 será sempre 0.
// d) O que acontece se o usuário inserir um número ímpar
//  Se o usuário inserir um número ímpar, o resto da divisão por 2 será sempre 1.
*/

// exercicio de escrita 3

/*
// Pergunta ao usuário sua idade em anos
let idadeEmAnos = prompt("Digite sua idade em anos:");

// Converte a entrada para um número
idadeEmAnos = parseInt(idadeEmAnos);

// Calcula a idade em meses, dias e horas
let idadeEmMeses = idadeEmAnos * 12;
let idadeEmDias = idadeEmAnos * 365; // Aproximação simples, não considerando anos bissextos
let idadeEmHoras = idadeEmDias * 24;

// Imprime os resultados no console
console.log("Sua idade em meses é: " + idadeEmMeses);
console.log("Sua idade em dias é: " + idadeEmDias);
console.log("Sua idade em horas é: " + idadeEmHoras);
*/

// exercicio de escrita 4

/*
numero1 = prompt("Digite o primeiro número: ")
numero2 = prompt("Digite o segundo número: ")

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)

console.log("O primeiro número é igual ao segundo?", numero1 == numero2)

    console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 == 0)

    console.log("O primeiro número é divisível pelo segundo? Não é possível dividir por zero.")
 
    console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 == 0)
e
    console.log("O segundo número é divisível pelo primeiro? Não é possível dividir por zero.")

    Explicação:
Entrada de Dados: Solicita dois números do usuário.
Comparação: Verifica se o primeiro número é maior, igual, ou se há divisibilidade entre os números.
Divisão por Zero: Verifica se o divisor é zero antes de realizar a operação de divisibilidade para evitar erros.

    */

