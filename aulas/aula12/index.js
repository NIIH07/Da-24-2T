//exemplo 1- Imprimindo Números
/*
let i = 0;

while(i<=10){
    console.log("o número é :",i)
    i++;
}
*/

/*
let estômago = 0
while(estômago<100){
    console.log("Quero comer mais coxinhas",estômago)
    estômago= estômago + 1
}
    */
 /*
let numero = 10
let soma = 0

while(numero !== 0){
    numero = Number(prompt("digite um numero"))
    soma+= numero 
    console.log("O número digitado foi: " , numero)
}
console.log("O valor total foi:" ,soma)
*/
  
/*
let c = 1
do{
    console.log("O valor do contador é :" ,c )
    c ++ 
}while(c <= 6)
*/

/*
let numeros = [14,67,89,15,23]

for(let i=0; i<5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}
*/

/*
let numeros = [20,36,96,55,7]
let numeroMaior = numeros[0]

for(let i=0; i<5; i++){
    if(numeroMaior<numeros[i]){
        numeroMaior=numeros[i]
    }
}
   

 console.log("O maior numero é: " ,numeroMaior)
*/

/*
let numeros = [11, 15, 18, 14, 12, 13];
        let numeroMaior = numeros[0];
        let somaPares = 0;
        
        for (let i = 0; i < numeros.length; i++) {
            if (numeroMaior < numeros[i]) {
                numeroMaior = numeros[i];
            }
        
            if (numeros[i] % 2 === 0) {
                somaPares += numeros[i];
            }
        }
        
        console.log("O maior número é:", numeroMaior);
        console.log("A soma dos números pares é:", somaPares);
*/

/*
const numeros = [14,67,89,15,23]

for(let numero of numeros ){
    console.log(numero)
}
*/

/*
const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"];
let mensagem = '';

for (const palavra of palavras) {
  mensagem += palavra + ' ';
}

// Remove o espaço extra no final
mensagem = mensagem.trim();

console.log(mensagem);
*/

/*
let numeros = [11, 15, 18, 14, 12, 13];
    
        let somaPares = 0;
        
        for (let numero of numeros) {
            if (numeros%2) {
                numeroMaior = numeros[i];
            }
        
            if (numeros[i] % 2 === 0) {
                somaPares += numeros[i];
            }
        }
            */
           /*
        
        console.log("O maior número é:", numeroMaior);
        console.log("A soma dos números pares é:", somaPares);
 
        function encontrarPalavrasMaisLongas(palavras) {
            let comprimentoMaximo = 0;
            let palavrasMaisLongas = [];
        
        
            for (const palavra of palavras) {
                const comprimentoAtual = palavra.length;
        
                if (comprimentoAtual > comprimentoMaximo) {
                    
                    comprimentoMaximo = comprimentoAtual;
                    palavrasMaisLongas = [palavra];
                } else if (comprimentoAtual === comprimentoMaximo) {
                    
                    palavrasMaisLongas.push(palavra);
                }
            }
        
            return palavrasMaisLongas;
        }
        
        
        const palavras = ["sol", "extraordinário", "longo", "magnífico", "incrível", "extraordinário"];
        const resultado = encontrarPalavrasMaisLongas(palavras);
        console.log(resultado);
        */
       