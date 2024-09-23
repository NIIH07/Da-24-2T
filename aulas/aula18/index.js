//exercicio de fixação

//exercicio de fixação 1
/*
const filme = {
    nome: "Auto da Compadecida",
    ano: 200,
    elenco:[ 
        "Matheus Nachtergaele","Selton Mello",'Denise Fraga',"Virginia Cavendish"
    ],
    transmissoesHoje:[
    {canal: "telecine", horario: "21h"},
    {canal: "Canal Brasil", horario: "19h"},
    {canal: "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.lenght - 1])
console.log(filme.transmissoesHoje[2])

o console ira imrpimir

Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }

que são partes do codigo
*/

//exercicio de fixação 2
/*
const cachorro = {
    nome: "juca",
    idaed: 3,
    raça: "SRD"
}
const gato = {...cachorro, nome: "juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a","o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a)
{ nome: 'juca', idade: 3, raça: 'SRD' }
{ nome: 'juba', idade: 3, raça: 'SRD' }
{ nome: 'jubo', idade: 3, raça: 'SRD' }



b)O operador ...  copia as propriedades de um objeto para um novo objeto.

*/


//exercicio de fixação 3
/*
function minhaFuncao(objeto, propriedades){
    return objeto[propriedades]
}

const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
false
undefined

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
false: A propriedade "backender" existe no objeto e seu valor é false.
undefined: A propriedade "altura" não existe no objeto.

*/

//Exercícios de escrita de código 1
/*
const pessoa = {
    nome: "Lucas Gabriel",
    apelidos: ["Mestre", "Prof", "Lu"]
};


function imprimirMensagem(pessoa) {
    const nome = pessoa.nome
    const apelidos = pessoa.apelidos

    console.log(Eu sou ${nome}, mas pode me chamar de: ${apelidos});
}


imprimirMensagem(pessoa);
*/

//Exercícios de escrita de código 1 continuação
/*
const pessoa = {
    nome: "Lucas Gabriel",
    apelidos: ["Mestre", "Prof", "Lu"]
};

function imprimirMensagem(pessoa) {
    const nome = pessoa.nome;
    const apelidos = pessoa.apelidos;

    let mensagem = Eu sou ${nome}, mas pode me chamar de:;
    for (let i = 0; i < apelidos.length; i++) {
        mensagem += ` ${apelidos[i]}`;
        if (i < apelidos.length - 1) {
            mensagem += ',';
        }
    }

    console.log(mensagem);
}


const novaPessoa = {
    ...pessoa,
    apelidos: ["Luca", "Gabi", "Lukinhas"]
};


imprimirMensagem(novaPessoa);

*/

//Exercícios de escrita de código 2

/*
const pessoa1 = {
    nome: 'Alice',
    idade: 30,
    profissao: 'Engenheira'
  };
  
  const pessoa2 = {
    nome: 'Bob',
    idade: 25,
    profissao: 'Designer'
  };
  
  function processarPessoa(pessoa) {
    return [
      pessoa.nome,                         
      pessoa.nome.length,                  
      pessoa.idade,                       
      pessoa.profissao,                    
      pessoa.profissao.length              
    ];
  }
  
  const resultado1 = processarPessoa(pessoa1);
  const resultado2 = processarPessoa(pessoa2);
  
  console.log(resultado1); 
  console.log(resultado2); 

*/

//Exercícios de escrita de código 3
/*
let carrinho = [];

const fruta1 = {
  nome: 'Maçã',
  disponibilidade: true
};

const fruta2 = {
  nome: 'Banana',
  disponibilidade: true
};

const fruta3 = {
  nome: 'Laranja',
  disponibilidade: true
};


function adicionarAoCarrinho(fruta) {
  carrinho.push(fruta);
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);


console.log(carrinho);
*/

/*
//desafio 1

function obterInformacoesUsuario() {
    
    const nome = prompt("Qual é o seu nome?");
    const idade = prompt("Qual é a sua idade?");
    const profissao = prompt("Qual é a sua profissão?");
  
    const usuario = {
      nome: nome,
      idade: idade,
      profissao: profissao
    };
  
    console.log(usuario);
  
    console.log("Tipo do objeto:", typeof usuario);
  }
  
  obterInformacoesUsuario();
  
/*
  function compararFilmes(filme1, filme2) {
    const { ano: ano1, nome: nome1 } = filme1;
    const { ano: ano2, nome: nome2 } = filme2;

    if (ano1 < ano2) {
        return ${nome1} foi lançado antes de ${nome2}.;
    } else if (ano1 > ano2) {
        return ${nome2} foi lançado antes de ${nome1}.;
    } else {
        return ${nome1} e ${nome2} foram lançados no mesmo ano.;
    }
}

const filmeA = { ano: 1994, nome: "Pulp Fiction" };
const filmeB = { ano: 1999, nome: "Matrix" };

console.log(compararFilmes(filmeA, filmeB));

*/



// Define a estrutura de um personagem