// exercício 1
/*
function imprimirOlamundo(){
    console.log("ola mundo")
}
imprimirOlamundo()

function imprimirNome(nome){
    console.log(nome)
}
imprimirNome("Ingrid")
imprimirNome("Joao")
imprimirNome("Wendryu")
*/

/*
function cumprimentar(nome) {
    console.log(`Olá ${nome}`);
}
cumprimentar('bia');
cumprimentar('caio');
cumprimentar('deise');
*/

/*
function imprimirSoma(num1, num2) {
    const soma = num1 + num2;
    console.log(`A soma é ${soma}`);
}
imprimirSoma(5, 3);
*/

/*
function imprimirMensagem(){
    console.log("qual o teu maior medo?")
}
imprimirMensagem()
*/

/*
function calcularArea(largura,altura){
    const resultadoArea = largura * altura
    return resultadoArea 
}
let area = calcularArea(2,5)
console.log("A area é:", area)
*/

/*
function calcularNumeros(num1, num2){
    const resultadoNumeros = num1 * num2
    return resultadoNumeros
}
let numeros = calcularNumeros(9,6)
console.log("a soma é:", numeros)
*/

/*
const numerosOriginal= [233,43,634,64,27,6]
function primeiroeUltimo (arrayNumeros)
const novoArray =[]
novoArray.push(arrayNumeros[0])
novoArray.push(arrayNumeros[arrayNumeros.length-1])
return novoArray

console.log(primeiroeUltimo(numerosOriginal))
*/

/*
const calcularArea= function(largura,altura){
    const soma= largura * altura
    return soma
}
const resultado= calcularArea(2,5)


function imprimirNome(nome){
    console.log("bem-vindo:", nome )
}
imprimirNome("rebeca")
imprimirNome("joao")
*/

/*
// 1 crie função frase
function imprimirBemvindo(){
    console.log("Bem-vindo Turma 24-2T")
}
imprimirBemvindo()

// 2 crie função números
function imprimirSoma(num1, num2) {
    const soma = num1 + num2;
    console.log(`A soma é ${soma}`);
}
imprimirSoma(22,84);

// 3 crie função número dobrado
function dobrarNumero(numero) {
    let dobro = numero * 2;
    console.log(`O dobro de ${numero} é ${dobro}`);
}
dobrarNumero(30);
*/

/*
// 3
const dobrarNumero= (numero) => {
    return numero*2
}
const numero=Number(prompt("digite o número"))
console.log("o dobro de : ", numero, "é ",)
dobrarNumero(numero)
*/

function determinaMonstro(temPelos, temDentesAfiados, seTransformaComLuaCheia, bebeSangue) {
    if (temPelos && seTransformaComLuaCheia && temDentesAfiados) {
        return "Lobisomem";
    } else if (bebeSangue && temDentesAfiados && !temPelos) {
        return "Vampiro";
    } else {
        return "Humano";
    }
}
console.log(determinaMonstro(true, true, true, false));   // Lobisomem
console.log(determinaMonstro(false, true, false, true));  // Vampiro
console.log(determinaMonstro(false, false, false, false)); // Humano
