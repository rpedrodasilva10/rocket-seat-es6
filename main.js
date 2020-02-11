class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo();
}

// Exercicios
//EX1
class Usuario {
    constructor(email, senha, admin = false) {
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }
    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha, true);
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1);
console.log(Adm1);

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//exercicios 2
//ex2.1
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item['idade']);
console.log(idades);

//ex2.2
const users = usuarios.filter(item => item.idade >= 18 && item.empresa === "Rocketseat");
console.log(users);

//ex2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google
const googleWorker = usuarios.find(usuario => usuario.empresa == 'Google');
console.log(googleWorker)

// 3.1
 const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });

console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usr => usr.idade;
/*function mostraIdade(usuario) {
 return usuario.idade;
}*/
console.log(mostraIdade(usuario));

// // 3.3
// /*// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Diego', idade = 18) =>  {return { nome, idade}};
// /*function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }*/
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// 3.4
const promise2 = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

const promise = () => {
    return new Promise((resolve, reject) =>
    {return resolve()});
}
console.log(promise2);
console.log(promise);

//4.1 Desestruturação simples
//A partir do seguinte objeto:
const empresa = {
 nome: 'Rocketseat',
 endereco: {
 cidade: 'Rio do Sul',
 estado: 'SC',
 }
};
///Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
//fim deve ser possível fazer o seguinte:
//var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;
var {nome, endereco: {cidade, estado} } = empresa
//const { cidade, estado } = empresa.endereco
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


// 4.2 Desestruturação em parâmetros
// Na seguinte função:
function mostraInfo(usuario) {
   let {nome, idade} = usuario
 //return `${usuario.nome} tem ${usuario.idade} anos.`;
 return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
//return `${nome} tem ${idade} anos.`;

//5.1 Rest
//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.

const arr1 = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr1

console.log(x, y)
// 5.2
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function somaVarios(...params) {
    const aValores = [...params]
    
    console.log(aValores.reduce((total, valor) => total+valor))
}

somaVarios(1,2,3,4)
somaVarios(1,2)

// 5.3
// A partir do objeto e utilizando o operador spread:
const obj = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};


// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
const usr2 = {
    ...obj,
    nome: 'Gabriel', 
    
}
console.log(usr2)
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usr3 = {
    ...obj,
    endereco: {
        ...obj.endereco,
        cidade: 'Lontras'
    }
}
console.log(usr3)

//6º Exercício
///Converta o seguinte trecho de código utilizando Template Literals:
const us = 'Diego';
let idade = 23;
console.log(`O usuário ${us} possui ${idade} anos`);


//Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
nome = 'Diego';
idade = 23;
const user5 = {
 nome,
 idade,
 cidade: 'Rio do Sul',
}

console.log(user5)