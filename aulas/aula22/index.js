// 1 erro logíco simples :
/*
let numeros = [1,2,3,4,5];
let soma; // erro: não inicializou a variavel 'soma' 

for(let i = 0; i < numeros.length; i++){
    soma+= numeros[i];
}
console.log(soma)// o que está acontecendo aqui ?
*/

/*
function fatorial(n){
    let resultado = 1;
    for(let i = n; i > 0; i--){
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5)); // esperado 120


// iteração                i                 resultado 
// 1                       5                     5
// 2                       4                     20
// 3                       3                     60
// 4                       2                     120
// 5                       1                     120

Iteração 1:  resultado = 1 * 5 = 5
Iteração 2:  resultado = 5 * 4 = 20
Iteração 3:  resultado = 20 * 3 = 60
Iteração 4:  resultado = 60 * 2 = 120
Iteração 5:  resultado = 120 * 1 = 120
*/

/*
let numeros = [1,2,3,4,5];
let soma = 0;
for (let i = 0; i < numeros.length; i++){
    console.log(`i: ${i}, numeros[i]: ${numeros[i]}, soma antes ${soma}`)
    soma += numeros[i];
    console.log(`soma depois ${soma}`);
}

console.log(`resultado final: ${soma}`);
*/

/*
let numeros = [1,2,3,4,5];
let somaPares = 0;

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        somaPares += numeros[i];
    }
}
console.log(somaPares); // esperado: 6 (2 + 4)

function jogoPontuacao(jogadas){
    let pontuacao = 0;

    for (let i = 0; i < jogadas.length; i++){
        console.log('Jogada: ${jogadas[i]}');
        if (jogadas[i] === "ganhou"){
            pontuacao += 3;
            console.log('Pontuação atual (ganhou): ${pontuacao}');
        } else if  (jogadas[i] === "empatou"){
            pontuacao += 1;
            console.log('Pontuação atual (empatou): ${pontuacao}');
        } else if  (jogadas[i] === "perdeu"){
            pontuacao -= 1;
            console.log('Pontuação atual (perdeu): ${pontuacao}');
        }


    }
   return pontuacao;
}

let resultadoFinal = jogoPontuacao(["ganhou","empatou","perdeu","ganhou"]);
console.log('Pontuação final: ${resultadoFinal}');
*/
