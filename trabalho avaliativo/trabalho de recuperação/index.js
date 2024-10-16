// Trabalho de recuperação! nome : Ingrid Barretto
let inventario = [
    [null, null, null, null, null],
    [null, null, null, null, null]
  ];
  
  function adicionarItem(item) {
    for (let i = 0; i < inventario.length; i++) {
      for (let j = 0; j < inventario[i].length; j++) {
        if (inventario[i][j] === null) {
          inventario[i][j] = item;
          console.log(`Item ${item} adicionado no slot [${i}][${j}].`);
          return;
        }
      }
    }
    console.log("Inventario cheio! Descarte um item para adicionar um novo.");
  }
  function removerItem(item) {
    for (let i = 0; i < inventario.length; i++) {
      for (let j = 0; j < inventario[i].length; j++) {
        if (inventario[i][j] === item) {
          inventario[i][j] = null;
          console.log(`Item ${item} removido do slot [${i}][${j}].`);
          return;
        }
      }
    }
    console.log(`Item ${item} nao encontrado no inventario.`);
  }
  adicionarItem("Pistola");
  adicionarItem("Erva Verde");
  adicionarItem("Chave");
  removerItem("Pistola");
  adicionarItem("Escopeta");
  
let inimigos = [
    { tipo: "zumbi", vida: 30 },
    { tipo: "zumbi", vida: 50 },
    { tipo: "mutante", vida: 100 }
  ];
  
  function atacarInimigo(arma, dano) {
    for (let i = 0; i < inimigos.length; i++) {
      inimigos[i].vida -= dano;
      console.log(`Atacou ${inimigos[i].tipo} com ${arma}, dano: ${dano}, vida restante: ${inimigos[i].vida}`);
      if (inimigos[i].vida <= 0) {
        console.log(`${inimigos[i].tipo} eliminado!`);
        inimigos.splice(i, 1); 
        i--; 
      }
    }
  }
  atacarInimigo("pistola", 20);
  atacarInimigo("escopeta", 30);
  
let estadoJogo = {
    vidaJogador: 100,
    inventarioSalvo: [],
    inimigosSalvos: []
  };
  
  function salvarJogo() {
    estadoJogo.inventarioSalvo = JSON.parse(JSON.stringify(inventario)); 
    estadoJogo.inimigosSalvos = JSON.parse(JSON.stringify(inimigos)); 
    console.log("Jogo salvo!");
  }
  
  function carregarJogo() {
    inventario = JSON.parse(JSON.stringify(estadoJogo.inventarioSalvo)); 
    inimigos = JSON.parse(JSON.stringify(estadoJogo.inimigosSalvos)); 
    console.log("Jogo carregado!");
  }
  salvarJogo();
  removerItem("Erva Verde"); 
  carregarJogo(); 
  
  //Inventario de Recursos
//Estrutura utilizada: Matriz 2x5. A matriz 2x5 foi escolhida para representar o inventario pois simula de forma simples a organização visual de slots de itens, como no jogo original. Cada célula da matriz pode armazenar um item ou estar vazia, o que facilita a adição e remoção de itens. O tamanho fixo da matriz (2 linhas e 5 colunas) representa a limitação de 10 slots, adicionando uma restrição para a gestão dos recursos.
// Gestão de Inimigos em um Cenario, lista de objetos.
// Os inimigos em uma área foram representados como objetos em uma lista, com atributos como tipo e vida. Esta escolha permite uma manipulação direta de cada inimigo, como reduzir pontos de vida ou remover inimigos mortos da lista. Usar uma lista facilita a iteração para aplicar o impacto dos ataques de maneira sequencial e ajustar a vida de cada inimigo.
// Registro de Cura e Dano Sofrido 
// Objeto simples para armazenamento do estado do jogo.
// Foi utilizado um objeto para armazenar o estado atual do jogo como vida do jogador, inventario e inimigos presentes na area. Esta abordagem permite salvar e recarregar rapidamente os dados usando copias do inventario e dos inimigos, imitando um sistema de salvamento comum em jogos.
// Descrição dos Algoritmos Implementados
//Inventario de Recursos : 
//Adicionar Item: A função adicionarItem(item) percorre a matriz em busca de um slot vazio (representado por null). Se encontrar, insere o item e informa ao jogador. Caso todos os slots estejam preenchidos, exibe uma mensagem de inventario cheio.
//Remover Item: A função removerItem(item) percorre a matriz para encontrar o item a ser removido. Ao encontra-lo, define o slot como null, liberando o espaço para um novo item.
// Gestão de Inimigos em um Cenario
//Atacar Inimigo: A função atacarInimigo(arma, dano) percorre a lista de inimigos, reduzindo a vida de cada um conforme o dano especificado. Se a vida de um inimigo for reduzida a 0 ou menos, ele é removido da lista, simulando a morte do inimigo.
//2- Registro de Cura e Dano Sofrido (Salvamento)
//Salvar Jogo: A função salvarJogo() cria copias do inventario e da lista de inimigos para armazenar o estado atual do jogo em um objeto estadoJogo. Utilizamos JSON.parse e JSON.stringify para criar uma copia profunda dos dados.
//Carregar Jogo: A função carregarJogo() restaura os dados salvos, atribuindo os valores do objeto estadoJogo ao inventario e a lista de inimigos, retornando o jogo ao estado anterior
// Resultados dos Testes e Prints
//Inventario
//Adicionar Itens: Adicionamos uma "Pistola", uma "Erva Verde", e uma "Chave". As mensagens indicaram que os itens foram adicionados corretamente nos slots disponiveis.
// Ao tentar adicionar um item quando o inventario estava cheio, a mensagem "Inventario cheio!" foi exibida corretamente.
//Remover Itens:
//Removemos a "Pistola" do inventario e a mensagem indicou que o item foi removido do slot especifico.
//Combate
//Atacar Inimigos:
//Realizei ataques com diferentes armas, e os pontos de vida dos inimigos foram atualizados corretamente. Quando um inimigo teve sua vida reduzida a 0 ou menos, a mensagem "eliminado" foi exibida e ele foi removido da lista de inimigos.
//Salvamento
//Salvar e Recarregar: Ao salvar o jogo e depois modificar o inventario (removendo itens), foi possível restaurar o estado original usando carregarJogo(). O inventario e a lista de inimigos retornaram ao estado salvo, confirmando a persistência dos dados.
//As estruturas de dados escolhidas e os algoritmos desenvolvidos permitiram criar um protótipo funcional das principais mecânicas de um jogo de sobrevivencia, como gestão de inventario e combate. A simplicidade das implementações, usando loops for e arrays, facilita o entendimento dos conceitos fundamentais e possibilita expansões futuras.