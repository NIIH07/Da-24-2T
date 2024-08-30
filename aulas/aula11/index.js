//exercicios

//1.
/*
const repostaDoUsuario = prompt("digite o numero que voce quer testar")
const numero = Number(repostaDoUsuario)

if(numero % 2 === 0){
    console.log("passou no teste")
}else{
    console.log("não passou no teste")
}

a) Explicação
O código verifica se o número inserido pelo usuário é par ou ímpar. Se o número for par, imprime "passou no teste"; se for ímpar, imprime "não passou no teste".

b) Tipos de números para "Passou no teste"
Números pares (incluindo zero), como 2, 4, 6, -2, -4, 0.

c) Tipos de números para "Não passou no teste"
Números ímpares, como 1, 3, 5, -1, -3.

*/
/*
//2.
let fruta = prompt("escolha uma fruta")
let preco
switch(fruta){
    case"laranja":
    preco = 3.5
    break;
    case "maçã":
        preco = 2.25
        break;
        case "uva":
            preco = 0.30
            break;
            case "pera":
                preco = 5.5
                break // break para o item c.
            default:
                preco = 5
                break;
            
}
  console.log("o preço da fruta",fruta,"e","R$", preco)

) Para que serve o código?
Define o preço de uma fruta com base na escolha do usuário e imprime o preço no console.

b) Mensagem se fruta for "Maçã"
o preço da fruta maçã e R$ 2.25

c) Mensagem se fruta for "pera" e remover o break acima do default
o preço da fruta pera e R$ 5
*/
/*
//3
const numero = number(prompr("digite o primeiro numero"))

if(numero > 0){
    console.log("esse numero passou no teste")
    let mensagem = "essa mensagem e secreta!!!"
}
console.log(mensagem)

a) O que a primeira linha está fazendo?
Tentando converter a entrada do usuário para um número (deveria ser Number(prompt(...))).

b) Mensagem do terminal
Número 10:
esse numero passou no teste

Número -10: Nenhuma mensagem, pois o if não é executado.

c) Haverá algum erro no console?
Sim, ReferenceError: mensagem is not defined, porque mensagem está fora do escopo onde foi definida.


*/


/*
//4

const idadeString = prompt("Qual a sua idade?");

const idade = Number(idadeString);

if (idade >= 18) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir");
}

*/
/*
//6.
let matutino = "M"
let vespertino = "V"
let noturno = "N"
const dia = prompt("em qual horario voce estuda usando M,V ou N")

if(dia)
    if(dia === "M"){
        console.log("bom dia")
    }
else if(dia === "V"){
    console.log("boa tarde")
}
else if(dia === "N"){
    console.log("boa noite")
}
else console,log("valor invalido")
*/

//7.
/*
const dia = prompt("em qual horario voce estuda usando M,V ou N")

switch(dia){
    case "M":
    console.log("bom dia")
    break;
    case "V":
        console.log("boa tarde")
        break;
        case "N":
            console.log("boa noite")
            break
            default:
                console.log("foi digitado errado")

}
*/

//7
/*
genero = prompt("Qual o gênero do filme que vão assistir? ")


preco = prompt("Qual o preço do ingresso? ")

if (genero=== "fantasia"){

  preco < 15
    console.log("Bom filme!")
        
}   else
    console.log("Escolha outro filme :(")

*/

//desafio
//1.

/*
let genero = prompt("Qual o gênero do filme que vão assistir? ");
let preco = parseFloat(prompt("Qual o preço do ingresso? "));

if (genero === "fantasia" && preco < 15) {
  let lanchinho = prompt("Qual lanchinho você vai comprar? (pipoca, chocolate, doces, etc)");
  console.log("Bom filme!");
  console.log(Aproveite o seu ${lanchinho}!);
} else {
  console.log("Escolha outro filme :(");
}
*/
    
//2.


function calcularValorIngresso(tipoJogo, etapaJogo, categoria) {
    
    const precos = {
        'IN': { 'SF': [1320, 880, 550, 220], 'DT': [660, 440, 330, 170], 'FI': [1980, 1320, 880, 330] },
        'DO': { 'SF': [1320, 880, 550, 220], 'DT': [660, 440, 330, 170], 'FI': [1980, 1320, 880, 330] }
    };
    
    
    let precoBase = precos[tipoJogo][etapaJogo][categoria - 1];
    
    
    if (tipoJogo === 'IN') {
        const valorDolar = 5.65;
        precoBase *= valorDolar;
    }

    return precoBase;
}


const nome = prompt("Digite seu nome completo:");
const tipoJogo = prompt("Digite o tipo de jogo (IN para internacional, DO para doméstico):").toUpperCase();
const etapaJogo = prompt("Digite a etapa do jogo (SF para semi-final, DT para decisão de terceiro lugar, FI para final):").toUpperCase();
const categoria = parseInt(prompt("Digite a categoria (1, 2, 3 ou 4):"), 10);
const quantidadeIngressos = parseInt(prompt("Digite a quantidade de ingressos:"), 10);


if (!nome || !['IN', 'DO'].includes(tipoJogo) || !['SF', 'DT', 'FI'].includes(etapaJogo) || ![1, 2, 3, 4].includes(categoria) || isNaN(quantidadeIngressos) || quantidadeIngressos <= 0) {
    console.log("Informações inválidas. Por favor, verifique os dados inseridos.");
} else {
    
    const valorIngresso = calcularValorIngresso(tipoJogo, etapaJogo, categoria);
    
    
    const valorTotal = valorIngresso * quantidadeIngressos;

    
    console.log("Informações da compra:");
    console.log("Nome completo:", nome);
    console.log("Tipo de jogo:", tipoJogo === 'IN' ? 'Internacional' : 'Doméstico');
    console.log("Etapa do jogo:", etapaJogo === 'SF' ? 'Semi-final' : etapaJogo === 'DT' ? 'Decisão de terceiro lugar' : 'Final');
    console.log("Categoria:", categoria);
    console.log("Quantidade de ingressos:", quantidadeIngressos);
    console.log("Valor unitário do ingresso: R$", valorIngresso.toFixed(2));
    console.log("Valor total a pagar: R$", valorTotal.toFixed(2));
}