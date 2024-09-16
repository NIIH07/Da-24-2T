/*
// primeiro exercício:
function minhaFunçao(variavel){
    return variavel *5
}
console.log(minhaFunçao(2))
console.log(minhaFunçao(10))

// A) irá ser impresso no console 10 e 50
// B) não aparece nada no console, pois precisamos do console.log para invocar a função
*/
 
/*
// segundo exercício:
let textoDoUsuario= prompt("insira um texto");
const outraFunçao = function(texto){
    return texto.toLowerCase(). includes("cenoura")
}
const resposta = outraFunçao(textoDoUsuario)
console.log(resposta)


// A) Função Captura um Texto: Solicita ao usuário um texto. Verifica Palavra: Checa se "cenoura" está no texto.  Utilidade Busca de Palavra: Verifica a presença de uma palavra 
//específica em um texto.
// B) "Eu gosto de cenoura" — true  "CENOURA é bom pra vista" — true  "Cenouras crescem na terra" — false
*/

/*
// terceiro exercício:
function informacoesSobreMim() {
    console.log("Olá! Meu nome é ingrid.");
    console.log("Tenho 16 anos.");
    console.log("Moro em São leopoldo.");
    console.log("Atualmente, sou estudante: sim.");
}
informacoesSobreMim();
*/

/*
// quarto exercício:
/Exercício 2 de escrita de código

//a)
/*
function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

const resultado = somarDoisNumeros(5, 3);  
console.log(resultado);  
*/

//b)
/*
function éMaiorOuIgual(num1, num2) {
    return num1 >= num2;
}


const resultado = éMaiorOuIgual(5, 3);  
console.log(resultado);  
*/

//c)
/*
function éPar(numero) {
    return numero % 2 === 0;
}


const resultado = éPar(4);  
console.log(resultado);  
*/

//d)
/*
function mensagemInfo(mensagem) {
    console.log("Tamanho da mensagem:", mensagem.length);
    console.log("Mensagem em maiúsculas:", mensagem.toUpperCase());
}


mensagemInfo("Olá, mundo!");  

*/

/*
//Exercício 3 de escrita de código
function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    
    if (num2 === 0) {
        return "Não é possível dividir por zero.";
    }
    return num1 / num2;
}


const numero1 = Number(prompt("Insira o primeiro número:"));
const numero2 = Number(prompt("Insira o segundo número:"));


console.log("Soma:", soma(numero1, numero2));
console.log("Subtração:", subtracao(numero1, numero2));
console.log("Multiplicação:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));
*/

//desafio 1

/*

//a)
const imprimirParametro = (parametro) => {
    console.log(parametro);
};

//b)
const somarEImprimir = (valor1, valor2) => {
    const soma = valor1 + valor2;
    imprimirParametro(soma);
};
somarEImprimir(5, 10);
*/
 
