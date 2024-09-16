// exercícios de objetos
/*
const professor = {
    nome: 'Lucas',
    idade: 32,
    altura: 1.75,
    email: 'lucas@gmail.com',
    tarefas: ['Dar aula','responder dúvidas'],
    contarPiadas:function(){
        console.log(" é pa vê ou é pa come")
    }
}

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = ' Leo '
professor["email"] = 'Leo@gmail.com'
*/

/*
const filme = {
    nome : 'Harry Potter e o  cálice de fogo ' ,
    direção: 'Mike Newell',
    lançamento: '2005',
    elenco: [
        { nome: 'Daniel Radcliffe', personagem: 'Harry Potter' },
        { nome: 'Emma Watson', personagem: 'Hermione Granger' },
        { nome: 'Rupert Grint', personagem: 'Ron Weasley' },
        { nome: 'Tom Felton', personagem: 'Draco Malfoy' }
    ],
    assistiu : 'já assiti' 
}
filme.elenco[0].nome = "Xuxa";
console.log(filme.nome)
console.log(filme.direção)
console.log(filme.lançamento)
console.log(filme["elenco"])
console.log(filme["assistiu"])
*/

/*
const pessoa = {
    nome : 'ingrid',
    idade: '16',
    gêneroMusical: 'pop internacional'
}
console.log(" O nome da pessoa é" ,pessoa.nome, "ela tem", pessoa.idade, "anos e gosta muito de", pessoa.gêneroMusical)
*/

/*
const donoDoPet = {
    nome :'ingrid' ,
    idade : '16',
    pet :{
        nome: 'chico',
        raca : 'Ragdoll',
        idade: '1 ano'
    }
}
console.log(donoDoPet.pet.pet.nome)
*/

/*
const curso = {
    nome: 'Front End Noturno',
    linguagens: [' JS','HTML', 'CSS']
}
console.log(curso.linguagens[0])
curso.numeroEstudantes=50
curso['numeroProfessores']=10

console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)
*/

/*
const professores = [
    {nome : 'Lucas ', idade: 32, modulo: 1},
    {nome: 'Leo', idade: 29 , modulo: 2},
    {nome : 'Mika', idade: 29 , modulo: 3}
]
console.log(professores[2].nome)*/

/*
const usuario = {
    nome: 'prof',
    idade:27, 
    email: 'prof@senacrs.com.br',
    cidade: 'São Leopoldo'
}

const novoUsuario= {
    ...usuario,
    nome: 'Lucas',
    idade:32,
    cidade: 'Canoas'
}
console.log(novoUsuario)

const nomeProfs = ['Lucas', 'Mika', 'Leo']
const novaListaProfs = [...nomeProfs]

console.log("o nome do prof é:",novaListaProfs[0])
*/

/*
const pessoa = {
    nome: 'ingrid',
    idade: 16,
};

const comidasPreferidas = ['lasanha', 'hamburguer', 'coquinha gelada', 'brigadeiro com morango'];
const amigo = {
    nome: 'tai',
    idade: 22,
};

const novaPessoa = {
    ...pessoa,
    comidasPreferidas: comidasPreferidas,
    amigo: amigo
};

const comidasPreferidas = novaPessoa.comidasPreferidas

const mensagem =`O nome da pessoa é ${novaPessoa.nome}, e suas comidas preferidas são ${comidasFormatadas}. Seu melhor amigo se chama ${novaPessoa.amigo.nome} e tem ${novaPessoa.amigo
`,
console.log(mensagem);
*/

const anime={
    nome: 'spy x family',
    personagens: [
       {nome:'loid forger',
        idade:'desconhecida',
        classePoder:'espião'
       },
       {nome: 'Yor Forger',
        idade: 27,
        classePoder: 'assassina'
       },
       {nome: 'Anya Forger',
        idade:6,
        classePoder: 'Ler mentes'
       }

    ]
}
console.log(anime.personagens)