//1

/*

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

*/


//2

/*
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
*/


//3

/*
const numero = parseInt(prompt("Digite um número para ver a tabuada:"));


for (let i = 1; i <= 10; i++) {
    console.log(${numero} x ${i} = ${numero * i});
}

*/

//4


/*
(function() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(Digite o número ${i}:));
        
        
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, insira um número válido.");
            i--; // Decrementa o índice para repetir a entrada
        }
    }

    
    alert(A soma dos números é: ${soma});
})();

*/


//5

/*
function calcularMedia() {
    let somaNotas = 0; 

   
    for (let i = 1; i <= 5; i++) {
        
        let nota = parseFloat(prompt(Digite a nota do aluno ${i}:));

       
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida. Insira um número entre 0 e 10.");
            i--; 
            continue;
        }

        
        somaNotas += nota;
    }

   
    let media = somaNotas / 5;

    
    alert(A média das notas é ${media.toFixed(2)});
}

//
calcularMedia();

*/


/*
const palavras = ['python', 'programacao', 'desenvolvimento', 'computador', 'tecnologia'];

const escolherPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];

let palavraEscolhida = escolherPalavra();
let letrasAdivinhadas = new Set();
let tentativasRestantes = 6;

const exibirPalavra = () => {
    return palavraEscolhida.split('').map(letra => letrasAdivinhadas.has(letra) ? letra : '_').join(' ');
};

const mostrarStatus = () => {
    console.log(`Palavra: ${exibirPalavra()}`);
    console.log(`Tentativas restantes: ${tentativasRestantes}`);
};

const jogoDaForca = () => {
    while (tentativasRestantes > 0) {
        mostrarStatus();

        const palpite = prompt('Adivinhe uma letra:').toLowerCase();

        if (!palpite || palpite.length !== 1 || !/^[a-z]$/.test(palpite)) {
            alert('Por favor, insira uma única letra.');
            continue;
        }

        if (letrasAdivinhadas.has(palpite)) {
            alert('Você já adivinhou essa letra.');
        } else {
            letrasAdivinhadas.add(palpite);

            if (palavraEscolhida.includes(palpite)) {
                alert('Correto!');
            } else {
                tentativasRestantes--;
                alert('Incorreto!');
            }

            if (!exibirPalavra().includes('_')) {
                alert(`Parabéns! Você adivinhou a palavra: ${palavraEscolhida}`);
                return;
            }
        }
    }
    alert(`Você perdeu! A palavra era: ${palavraEscolhida}`);
};

jogoDaForca();
*/


/*
function validarCPF(cpf) {
    
    cpf = cpf.replace(/[^\d]/g, '');

    
    if (cpf.length !== 11) {
        return false;
    }

    
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    
    const calcularDigito = (cpf, posicoes) => {
        let soma = 0;
        let multiplicador = posicoes;

        for (let i = 0; i < posicoes - 1; i++) {
            soma += cpf[i] * multiplicador--;
        }

        let resto = (soma * 10) % 11;
        return (resto === 10 || resto === 11) ? 0 : resto;
    };

    
    const digito1 = calcularDigito(cpf, 10);
    if (parseInt(cpf[9], 10) !== digito1) {
        return false;
    }

    
    const digito2 = calcularDigito(cpf, 11);
    if (parseInt(cpf[10], 10) !== digito2) {
        return false;
    }

    return true;
}


function solicitarCPF() {
    const cpf = prompt('Digite o CPF para validação (formato XXX.XXX.XXX-YY):');

    if (validarCPF(cpf)) {
        alert('CPF válido!');
    } else {
        alert('CPF inválido.');
    }
}


solicitarCPF();
*/

/*
const calcularCedulas = (valor) => {
    // Definir as cédulas disponíveis
    const cedulas = [100, 50, 20, 10, 5, 2, 1];
    const resultado = {};

    // Iterar sobre cada tipo de cédula
    for (const cedula of cedulas) {
        if (valor >= cedula) {
            // Calcular quantas cédulas desse valor são necessárias
            const quantidade = Math.floor(valor / cedula);
            resultado[cedula] = quantidade;

            // Subtrair o valor correspondente
            valor -= quantidade * cedula;
        }
    }

    return resultado;
};

const exibirResultado = (resultado) => {
    for (const [cedula, quantidade] of Object.entries(resultado)) {
        console.log(`Notas de ${cedula}: ${quantidade}`);
    }
};

// Função principal para o simulador
const simuladorCaixaEletronico = () => {
    const valor = parseInt(prompt('Digite o valor para saque:'));

    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    const resultado = calcularCedulas(valor);
    exibirResultado(resultado);
};

// Iniciar o simulador
simuladorCaixaEletronico();
*/


