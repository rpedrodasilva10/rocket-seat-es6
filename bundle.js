"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "addTodo",
    value: function addTodo() {
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.addTodo();
}; // Exercicios
//EX1


var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = admin;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha, true));
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1);
console.log(Adm1);
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//exercicios 2
//ex2.1

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item['idade'];
});
console.log(idades); //ex2.2

var users = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === "Rocketseat";
});
console.log(users); //ex2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google

var googleWorker = usuarios.find(function (usuario) {
  return usuario.empresa == 'Google';
});
console.log(googleWorker); // 3.1

var arr = [1, 2, 3, 4, 5]; // arr.map(function(item) {
//  return item + 10;
// });

console.log(arr.map(function (item) {
  return item + 10;
})); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usr) {
  return usr.idade;
};
/*function mostraIdade(usuario) {
 return usuario.idade;
}*/


console.log(mostraIdade(usuario)); // // 3.3
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

var promise2 = function promise2() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise2);
console.log(promise); //4.1 Desestruturação simples
//A partir do seguinte objeto:

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; ///Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
//fim deve ser possível fazer o seguinte:
//var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado; //const { cidade, estado } = empresa.endereco

console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2 Desestruturação em parâmetros
// Na seguinte função:

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade; //return `${usuario.nome} tem ${usuario.idade} anos.`;

  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:
//return `${nome} tem ${idade} anos.`;
//5.1 Rest
//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x, y);
