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

