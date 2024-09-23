// trabalho avaliativo B 

// Classe Personagem representa um personagem no jogo com atributos como nome, classe, nível, HP e habilidades.
class Personagem {
    // O construtor inicializa as propriedades do personagem.
    constructor(nome, classe, nivel, hp, habilidades) {
        this.nome = nome;            // Nome do personagem
        this.classe = classe;        // Classe ou profissão do personagem (ex: Guerreiro, Arqueiro)
        this.nivel = nivel;          // Nível do personagem
        this.hp = hp;                // Pontos de vida (HP) do personagem
        this.habilidades = habilidades;  // Lista de habilidades que o personagem possui
        this.historicoAcoes = [];    // Histórico de ações realizadas pelo personagem
    }

    // Método para realizar uma ação, que pode ser direcionada a outro personagem (alvo).
    realizarAcao(acao, alvo = null) {
        // Cria uma string que descreve a ação realizada. Se houver um alvo, inclui o nome do alvo.
        const acaoDetalhe = `Ação: ${acao}${alvo ? ' em ' + alvo.nome : ''}`;
        // Adiciona a ação ao histórico de ações do personagem.
        this.historicoAcoes.push(acaoDetalhe);
        // Exibe no console a ação realizada.
        console.log(`${this.nome} realizou: ${acaoDetalhe}`);
    }

    // Método para retornar o status completo do personagem como um objeto.
    getStatus() {
        return {
            nome: this.nome,                // Nome do personagem
            classe: this.classe,            // Classe ou profissão do personagem
            nivel: this.nivel,              // Nível atual do personagem
            hp: this.hp,                    // Pontos de vida do personagem
            habilidades: this.habilidades,  // Lista de habilidades do personagem
            historicoAcoes: this.historicoAcoes  // Histórico de ações realizadas
        };
    }
}

// Classe SistemaJogo para gerenciar os personagens dentro do jogo.
class SistemaJogo {
    constructor() {
        this.personagens = [];  // Lista de personagens cadastrados no sistema.
    }

    // Método para cadastrar um novo personagem no jogo.
    cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
        // Cria um novo objeto Personagem com os parâmetros fornecidos.
        const novoPersonagem = new Personagem(nome, classe, nivel, hp, habilidades);
        // Adiciona o novo personagem à lista de personagens.
        this.personagens.push(novoPersonagem);
        // Exibe uma mensagem no console confirmando o cadastro.
        console.log(`Personagem ${nome} cadastrado com sucesso.`);
    }

    // Método para buscar um personagem pelo nome.
    buscarPersonagem(nome) {
        // Retorna o primeiro personagem encontrado com o nome correspondente.
        return this.personagens.find(personagem => personagem.nome === nome);
    }

    // Método para excluir um personagem do jogo pelo nome.
    excluirPersonagem(nome) {
        // Encontra o índice do personagem com o nome fornecido.
        const index = this.personagens.findIndex(personagem => personagem.nome === nome);
        if (index !== -1) {
            // Remove o personagem da lista se ele for encontrado.
            this.personagens.splice(index, 1);
            console.log(`Personagem ${nome} excluído com sucesso.`);
        } else {
            // Exibe uma mensagem se o personagem não for encontrado.
            console.log(`Personagem ${nome} não encontrado.`);
        }
    }

    // Método para listar todos os personagens cadastrados.
    listarPersonagens() {
        // Ordena os personagens por nome e exibe seus status no console.
        this.personagens.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(personagem => {
            console.log(personagem.getStatus());
        });
    }

    // Método para realizar uma ação de um personagem em outro (ou sem alvo).
    realizarAcao(nomePersonagem, acao, alvo = null) {
        // Busca o personagem que realizará a ação.
        const personagem = this.buscarPersonagem(nomePersonagem);
        if (personagem) {
            // Se o personagem for encontrado, realiza a ação.
            personagem.realizarAcao(acao, alvo);
        } else {
            // Se o personagem não for encontrado, exibe uma mensagem de erro.
            console.log(`Personagem ${nomePersonagem} não encontrado.`);
        }
    }
}

// pedido do jogo
const jogo = new SistemaJogo();

// Cadastra dois personagens no sistema.
jogo.cadastrarPersonagem('Aragorn', 'Guerreiro', 5, 100, ['Espada', 'Escudo']);
jogo.cadastrarPersonagem('Legolas', 'Arqueiro', 4, 80, ['Arco', 'Flecha']);

// Aragorn realiza uma ação de ataque em Legolas.
jogo.realizarAcao('Aragorn', 'atacar', jogo.buscarPersonagem('Legolas'));

// Legolas realiza uma ação de defesa.
jogo.realizarAcao('Legolas', 'defender');

// Lista todos os personagens cadastrados e suas informações.
jogo.listarPersonagens();

// Busca e exibe o status do personagem Aragorn.
const personagem = jogo.buscarPersonagem('Aragorn');
console.log('Detalhes do personagem buscado:', personagem.getStatus());

// Exclui o personagem Legolas do sistema.
jogo.excluirPersonagem('Legolas');

// Lista os personagens restantes (somente Aragorn agora).
jogo.listarPersonagens();
