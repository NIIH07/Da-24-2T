/*
let matriz = [
    [1,2,3],
    [4,5,6]
]

console.log(matriz[0][1])
console.log(matriz[1][0])
console.log(matriz[1][2])


let matriz2 = [
[10,20,30],
[40,50,60],
[70,80,90]
]
  
let matriz3 = []

matriz3[0] = [1,2,3]
matriz3[1] = [4,5,6]
matriz3[2] = [7,8,9]

console.log(matriz2[0][1])//valor 20
console.log(matriz2[2][1])//valor 80
console.log(matriz2[1][0])//valor 40


//exercicio 1
//a)
let matriz = []

matriz[0] = [0,0,0]
matriz[1] = [0,0,0]
matriz[2] = [0,0,0]

//b)

matriz[1][2] = 1

console.log(matriz[0][0],matriz[0][1],matriz[0][2])
console.log(matriz[1][0],matriz[1][1],matriz[1][2])
console.log(matriz[2][0],matriz[2][1],matriz[2][2])


//acesando elementos de uma matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
    }
}

//soma de elementos da matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        console.log(matriz[i][j])
        soma += matriz[i][j]
    }
}
console.log(soma)


//alterar um valor especifico

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let soma = 0
for(let i=0; i<matriz.length;i++){
    for(let j=0; j<matriz[i].length;j++){
        matriz[i][j]*=2
        console.log(matriz[i][j])

    }
}

//exercicio 2

let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function somaMatriz(matriz) {
    let soma = 0; 
    for (let i = 0; i < matriz.length; i++) { 
        for (let j = 0; j < matriz[i].length; j++) { 
            soma += matriz[i][j]; 
        }
    }
    return soma; 
}
let resultado = somaMatriz(matriz);
console.log("Soma dos elementos da matriz:", resultado); 
*/
//exercicio 3

/*
let tabuleiro = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

function setarNavios(){
    tabuleiro[5][6] = 1
    tabuleiro[5][7] = 1
    tabuleiro[1][3] = 1
    tabuleiro[1][4] = 1
    tabuleiro[1][5] = 1
    tabuleiro[2][0] = 1
    tabuleiro[2][1] = 1
    tabuleiro[3][2] = 1
    tabuleiro[4][2] = 1
    tabuleiro[5][2] = 1
    tabuleiro[7][6] = 1
    tabuleiro[8][6] = 1
}

let soma = 0
for(let 1=0; i<tabuleiro.length; i++){
    for(let j=0; j<tabuleiro[i].length;j++)
        quantidadeDeNavios+=tabuleiro[i][j]
}
let escolhaLinha = Number(prompt("escolha a linha que deseja atacar!"))
let escolhaColuna = Number(prompt("escolha a coluna que deseja atacar!"))

function verificarPosicao(linha, coluna){
           if (tabuleiro[linha][coluna] === 1){
            console.log('acertou')
           }
           else if ()
           */