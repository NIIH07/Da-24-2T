// Ingrid e Luis
// Estruturas de Dados

// Arrays vazios para entrada de dados
const personagens = [];
const armas = [];
const itens = [];

// Nomes pré-definidos
const nomesPersonagens = ['Link', 'Zelda', 'Ganon', 'Impa', 'Epona'];
const tiposArmas = ['Espada', 'Arco', 'Bumerangue', 'Machado'];
const nomesItens = ['Bomba', 'Poção', 'Rupee'];

// Funções de Validação

function validarPersonagens(personagens) {
    for (const p of personagens) {
        if (typeof p.nome !== 'string' || p.nome === '') {
            return `Erro: Personagem com nome inválido.`;
        }
        if (typeof p.vida !== 'number' || p.vida < 1 || p.vida > 20) {
            return `Erro: O personagem ${p.nome} tem corações de vida fora do intervalo permitido.`;
        }
        if (typeof p.ataque !== 'number' || p.ataque < 0 || 
            typeof p.defesa !== 'number' || p.defesa < 0) {
            return `Erro: O personagem ${p.nome} tem valores de ataque ou defesa inválidos.`;
        }
    }
    return "Personagens validados com sucesso!";
}

function validarArmas(armas) {
    for (const a of armas) {
        if (typeof a.tipo !== 'string' || a.tipo === '') {
            return `Erro: Arma com tipo inválido.`;
        }
        if (typeof a.dano !== 'number' || a.dano <= 0) {
            return `Erro: A arma ${a.tipo} tem dano inválido.`;
        }
        if (typeof a.alcance !== 'number' || a.alcance < 0) {
            return `Erro: A arma ${a.tipo} tem alcance inválido.`;
        }
    }
    return "Armas validadas com sucesso!";
}

function validarItens(itens) {
    for (const i of itens) {
        if (typeof i.nome !== 'string' || i.nome === '') {
            return `Erro: Item com nome inválido.`;
        }
        if (typeof i.efeito !== 'string' || i.efeito === null || i.efeito === '') {
            return `Erro: Item ${i.nome} com efeito inválido.`;
        }
    }
    return "Itens validados com sucesso!";
}

// Funções para coletar dados

function coletarPersonagens() {
    const numPersonagens = Number(prompt("Quantos personagens você deseja adicionar?"));
    if (isNaN(numPersonagens) || numPersonagens <= 0) {
        console.log("Erro: Número de personagens inválido.");
        return false; // Retorna false se a coleta falhar
    }
    for (let i = 0; i < numPersonagens; i++) {
        let nome;
        while (true) {
            nome = prompt(`Escolha um nome para o personagem ${i + 1}:\n${nomesPersonagens.join(', ')}`);
            if (nomesPersonagens.includes(nome)) {
                break; // Sai do loop se o nome for válido
            }
            console.log(`Erro: O nome "${nome}" não é válido. Tente novamente.`);
        }
        const vida = Number(prompt(`Vida do personagem ${i + 1} (1 a 20):`));
        const ataque = Number(prompt(`Ataque do personagem ${i + 1} (0 ou maior):`));
        const defesa = Number(prompt(`Defesa do personagem ${i + 1} (0 ou maior):`));
        if (vida < 1 || vida > 20 || ataque < 0 || defesa < 0) {
            console.log(`Erro: Valores inválidos para o personagem ${nome}.`);
            return false; // Retorna false se a coleta falhar
        }
        personagens.push({ nome, vida, ataque, defesa });
    }
    return true; // Retorna true se a coleta for bem-sucedida
}

function coletarArmas() {
    const numArmas = Number(prompt("Quantas armas você deseja adicionar?"));
    if (isNaN(numArmas) || numArmas <= 0) {
        console.log("Erro: Número de armas inválido.");
        return false; // Retorna false se a coleta falhar
    }
    for (let i = 0; i < numArmas; i++) {
        const tipo = prompt(`Escolha um tipo de arma para a arma ${i + 1}:\n${tiposArmas.join(', ')}`);
        const dano = Number(prompt(`Dano da arma ${i + 1} (maior que 0):`));
        const alcance = Number(prompt(`Alcance da arma ${i + 1} (0 ou maior):`));
        if (dano <= 0 || alcance < 0) {
            console.log(`Erro: Valores inválidos para a arma ${tipo}.`);
            return false; // Retorna false se a coleta falhar
        }
        armas.push({ tipo, dano, alcance });
    }
    return true; // Retorna true se a coleta for bem-sucedida
}

function coletarItens() {
    const numItens = Number(prompt("Quantos itens você deseja adicionar?"));
    if (isNaN(numItens) || numItens <= 0) {
        console.log("Erro: Número de itens inválido.");
        return false; // Retorna false se a coleta falhar
    }
    for (let i = 0; i < numItens; i++) {
        const nome = prompt(`Escolha um nome para o item ${i + 1}:\n${nomesItens.join(', ')}`);
        const efeito = prompt(`Efeito do item ${i + 1}:`);
        if (nome === '' || efeito === '') {
            console.log(`Erro: Valores inválidos para o item ${nome}.`);
            return false; // Retorna false se a coleta falhar
        }
        itens.push({ nome, efeito });
    }
    return true; // Retorna true se a coleta for bem-sucedida
}

// Coletar dados do usuário
const personagensColetados = coletarPersonagens();
const armasColetadas = coletarArmas();
const itensColetados = coletarItens();

// Testar as funções apenas se a coleta for bem-sucedida
if (personagensColetados && armasColetadas && itensColetados) {
    console.log(validarPersonagens(personagens));
    console.log(validarArmas(armas));
    console.log(validarItens(itens));
} else {
    console.log("Erro: Dados não validados devido a entradas inválidas.");
}













/*
// Olhamos alguns video pra dar uma ajudinha a ser mais facil, como usar o codigo join.
//Também fizemos outro codigo usando um array de objetos so não sei se era esse ou o outro por isso fizemos ambos.

const jogo = {
    personagens: [
        { nome: "Link", vida: 15, ataque: 10, defesa: 8 },
        { nome: "Zelda", vida: 12, ataque: 8, defesa: 10 },
        { nome: "Ganon", vida: 20, ataque: 15, defesa: 12 },
        { nome: "Impa", vida: 5, ataque: 6, defesa: 7 }
    ],
    armas: [
        { tipo: "Espada", dano: 10, alcance: 1 },
        { tipo: "Arco", dano: 8, alcance: 10 },
        { tipo: "Bumerangue", dano: 5, alcance: 3 },
        { tipo: "Clava", dano: 0, alcance: 1 }
    ],
    itens: [
        { nome: "Bomba", efeito: "Explodir inimigos" },
        { nome: "Poção", efeito: "Restaurar vida" },
        { nome: "Rupees", efeito: "Moeda do jogo" },
        { nome: "", efeito: "Efeito inválido" } // Este item está inválido e pode ser removido ou tratado
    ]
};

// Exemplo de acesso aos dados
console.log(jogo.personagens);
console.log(jogo.armas);
console.log(jogo.itens);

// Função para validar os dados do objeto
function validarJogo(jogo) {
    const validarPersonagens = (personagens) => {
        for (const p of personagens) {
            if (typeof p.nome !== 'string' || p.nome === '') {
                return `Erro: Personagem com nome inválido.`;
            }
            if (typeof p.vida !== 'number' || p.vida < 1 || p.vida > 20) {
                return `Erro: O personagem ${p.nome} tem corações de vida fora do intervalo permitido.`;
            }
            if (typeof p.ataque !== 'number' || p.ataque < 0 || typeof p.defesa !== 'number' || p.defesa < 0) {
                return `Erro: O personagem ${p.nome} tem valores de ataque ou defesa inválidos.`;
            }
        }
        return "Personagens validados com sucesso!";
    };

    const validarArmas = (armas) => {
        for (const a of armas) {
            if (typeof a.tipo !== 'string' || a.tipo === '') {
                return `Erro: Arma com tipo inválido.`;
            }
            if (typeof a.dano !== 'number' || a.dano <= 0) {
                return `Erro: A arma ${a.tipo} tem dano inválido.`;
            }
            if (typeof a.alcance !== 'number' || a.alcance < 0) {
                return `Erro: A arma ${a.tipo} tem alcance inválido.`;
            }
        }
        return "Armas validadas com sucesso!";
    };

    const validarItens = (itens) => {
        for (const i of itens) {
            if (typeof i.nome !== 'string' || i.nome === '') {
                return `Erro: Item com nome inválido.`;
            }
            if (typeof i.efeito !== 'string' || i.efeito === '') {
                return `Erro: Item ${i.nome} com efeito inválido.`;
            }
        }
        return "Itens validados com sucesso!";
    };

    console.log(validarPersonagens(jogo.personagens));
    console.log(validarArmas(jogo.armas));
    console.log(validarItens(jogo.itens));
}

// Validar os dados do objeto
validarJogo(jogo);
*/

