/*
let valor = 0

for(let i =0; i<5; i++){
    valor+=i
}
console.log(valor)

// o valor impresso no console é 10 e o código  está somando os valores de i de 0 a 4.
*/

/*
const lista= [10,11,12,15,18,19,21,23,25,27,30]

    for(let numero of lista ) {
        if (numero>18) {
            console.log(numero)
        }
    }

    // foi impresso no console os seguintes números : 19,21,23,25,27 e 30
    // O for...of não fornece acesso ao índice dos elementos. Para acessar o índice, você pode usar um for tradicional ou o forEach com um parâmetro adicional.
*/

/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
let quantidadeAtual = 0
while( quantidadeAtual < quantidadeTotal){
    let linha = "*"
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
console.log(linha)
quantidadeAtual++
}
//Se o usuário digitar o número 4, o resultado impresso no console será:
// *,**,***,****,*****
*/

//1. Exercícios de escrita de código

/*
const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadeBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    
    const nomesBichinhos = [];
    
   
    for (let i = 0; i < quantidadeBichinhos; i++) {
        const nome = prompt(Digite o nome do bichinho ${i + 1}:);
        nomesBichinhos.push(nome);
    }
    
    
    console.log(nomesBichinhos);
}
*/

//2.

/*
const arrayOriginal = [5, 12, 8, 3, 7, 15, 2];


console.log("Valores do array original:");
arrayOriginal.forEach(valor => {
  console.log(valor);
});


console.log("\nValores do array original divididos por 10:");
arrayOriginal.forEach(valor => {
  console.log(valor / 10);
});


const arrayPares = arrayOriginal.filter(valor => valor % 2 === 0);
console.log("\nArray contendo apenas números pares:");
console.log(arrayPares);


const arrayStrings = arrayOriginal.map((valor, index) => O elemento do índice ${index} é: ${valor});
console.log("\nArray contendo as strings formatadas:");
console.log(arrayStrings);


const maiorNumero = Math.max(...arrayOriginal);
const menorNumero = Math.min(...arrayOriginal);
console.log("\nMaior e menor número do array original:");
console.log(O maior número é: ${maiorNumero});
console.log(O menor número é: ${menorNumero});   

*/

//desafio 1

/*
function jogarAdivinhação() {
   
    const numeroPensado = Number(prompt("Jogador 1: Digite o número em que você está pensando (não mostre para o outro jogador):"));
    
    
    if (isNaN(numeroPensado)) {
        console.log("Número inválido! O jogo será encerrado.");
        return;
    }
    
    console.log("Vamos jogar!");
    
    let numeroChutado;
    let tentativas = 0;

    
    do {
        numeroChutado = Number(prompt("Jogador 2: Chute um número:"));
        
        
        if (isNaN(numeroChutado)) {
            console.log("Entrada inválida! Por favor, digite um número.");
            continue; 
        }
        
        tentativas++;
        
        
        if (numeroChutado < numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é maior!);
        } else if (numeroChutado > numeroPensado) {
            console.log(O número chutado foi: ${numeroChutado}. Errrrrrrrou, o número escolhido é menor!);
        } else {
            console.log(O número chutado foi: ${numeroChutado}. Acertou!!);
            console.log(O número de tentativas foi: ${tentativas});
        }
        
    } while (numeroChutado !== numeroPensado);
}

jogarAdivinhação();




vi em um video explicando como funcionava esse tipo de codigo, bem parecido com o que usamos.

*/

/*
function iniciarJogo() {
    
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    console.log("Vamos jogar!");
    
    let tentativas = 0;
    let numeroChutado;
    
    
    do {
        
        numeroChutado = parseInt(prompt("Chute um número entre 1 e 100:"));
        tentativas++;
        
        console.log(O número chutado foi: ${numeroChutado});
        
       
        if (numeroChutado < numeroSorteado) {
            console.log("Errou. O número escolhido é maior.");
        } else if (numeroChutado > numeroSorteado) {
            console.log("Errou. O número escolhido é menor.");
        } else {
            console.log("Acertou!");
            console.log(O número de tentativas foi: ${tentativas});
        }
        
    } while (numeroChutado !== numeroSorteado);
}


iniciarJogo();
*/
/*
let vida = 1; 
let recursos = 0; 
let rodadas = 0; 


function explorar() {
  rodadas++; 
  let chance = Math.random(); 

  if (chance < 0.50) {
    
    recursos++;
    alert("Você encontrou um recurso. Recursos totais: " + recursos);
  } else if (chance < 0.75) {
    
    alert("Você encontrou um perigo. Cuidado!");
  } else {
    
    vida--;
    alert("Você encontrou um Gamemaker. Vida restante: " + vida);
  }
}


function descansar() {
  vida++; 
  alert("Você descansou. Vida atual: " + vida);
}


function jogar() {
  while (vida > 0 && recursos < 10) {
    let escolha = prompt("Escolha uma ação: 'explorar e o 1' ou 'descansar e o 2'");

    if (escolha === "1") {
      explorar();
    } else if (escolha === "2") {
      descansar();
    } else {
      alert("Escolha inválida.");
    }

    
    if (recursos >= 10) {
      alert("Parabéns! Você coletou todos os recursos necessários.");
      break;
    } else if (vida <= 0) {
      alert("Você perdeu todas as suas vidas. Fim de jogo.");
      break;
    }
  }

  
 alert("Total de recursos coletados: " + recursos);
  alert("Número total de rodadas exploradas: " + rodadas);
}


jogar();
*/
