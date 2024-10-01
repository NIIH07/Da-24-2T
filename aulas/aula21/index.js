/*
let matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
];
console.log(matriz[2][1]);
// A) será impresso no console o número 16,porque ele esta procurando no console log ja que o primeiro e zero seria a terceira linha, ja que quer achar na coluna 1 vai ser na segunda,
//dando resultado 16.
*/

/*
let matriz = [
    [1,2],
    [3,4],
    [5,6,7]
];

for (let i = 0; i < matriz.length; i ++){
 for ( let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] % 2 === 0) {
        console.log(matriz[i][j]);
    }
 } 
}
// os números que são impressos no console são o 2,4 e 6. Porque o código verifica cada número da matriz e imprime apenas aqueles que são pares, ou seja,
 //que podem ser divididos por 2 sem deixar resto. Portanto, só os números 2,4 e 6 passam nessa verificação.
*/

/*
let matriz=[
    [5,10,15],
    [20,25,30],
    [35,40,45]
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j];
    }
}
console.log(soma);
//  Soma dos elementos:
//linha 1 = 5 + 10 + 15 = 30
//linha 2 =  20 + 25 + 30 = 75
//linha 3 = 35  + 40 + 45 = 120
//Soma total:
//30 +  75 + 120 = 225
//Portanto, a soma de todos os elementos da matriz é 225.
*/

//Exercícios de escrita de código 1

/*
let matriz = [
    [0,1,0,2,0],
    [2,0,1,1,0],
    [0,0,2,1,1],
    [1,2,0,0,2],
    [0,1,0,2,0]
]
function imprimirMapa(mapa) {
    for (let i = 0; i < mapa.length; i++) {
        let linhaFormatada = '';
        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[i][j] === 0) {
                linhaFormatada += 'A '; 
            } else if (mapa[i][j] === 1) {
                linhaFormatada += 'G '; 
            } else if (mapa[i][j] === 2) {
                linhaFormatada += 'M '; 
            }
        }
        console.log(linhaFormatada); 
    }
}
imprimirMapa(matriz);



//Exercícios de escrita de código 2

let pontuacoes = [
    [10, 20, 30, 40],  
    [15, 25, 35, 45],  
    [20, 30, 40, 50]   
];

const pontuacaoTotal = [0, 0, 0];
for (let i = 0; i < pontuacoes.length; i++) { 
    for (let j = 0; j < pontuacoes[i].length; j++) {  
        pontuacaoTotal[i] += pontuacoes[i][j];
    }
}
for (let i = 0; i < pontuacaoTotal.length; i++) {
    console.log("Pontuação total do jogador:", i+1 , "é:", pontuacaoTotal[i]);

}

*/
/*
//Exercícios de escrita de código 3

let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
for (let i = 0; i < matriz.length; i++) {
    let linha = matriz[i]; 
    let linhaInvertida = []; 
    for (let j = linha.length - 1; j >= 0; j--) {
        linhaInvertida.push(linha[j]);
    }
    matriz[i] = linhaInvertida;
}
console.log(matriz);
*/

/*
//Desafio- Jurassic Park 
let ilha = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function setarMapa()
{
    for (let i = 0; i < ilha.length; i++) {
        for (let j = 0; j < ilha[i].length; j++) {
            ilha[i][j] = Math.floor(Math.random()*5)
        }
    }
}

setarMapa()

console.log(ilha)

function imprimirMapa(mapa) {
    for (let i = 0; i < mapa.length; i++) {
        let linhaFormatada = '';
        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[i][j] === 0) linhaFormatada += 'G '; 
            else if (mapa[i][j] === 1) linhaFormatada += 'A '; 
            else if (mapa[i][j] === 2) linhaFormatada += 'F '; 
            else if (mapa[i][j] === 3) linhaFormatada += 'C '; 
            else if (mapa[i][j] === 4) linhaFormatada += 'H '; 
        }
        console.log(linhaFormatada);
    }
}
function contarDinossauros(ilha) {
    let contagem = 0;
    for (let i = 0; i < ilha.length; i++) {
        for (let j = 0; j < ilha[i].length; j++) {
            if (ilha[i][j] === 3 || ilha[i][j] === 4) {
                contagem++;
            }
        }
    }
    return contagem;
}
   */
   
   