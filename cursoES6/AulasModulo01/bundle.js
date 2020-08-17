"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var todos = /*#__PURE__*/function () {
  function todos() {
    _classCallCheck(this, todos);

    this.data = [];
  }

  _createClass(todos, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return todos;
}();

var TodoList = /*#__PURE__*/function (_todos) {
  _inherits(TodoList, _todos);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.userName = "Lucas";
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.userName);
    }
  }]);

  return TodoList;
}(todos);

var lista = new TodoList();

document.getElementById('addTodo').onclick = function () {
  lista.add('Novo Item');
}; // lista.showUser();


var Math = /*#__PURE__*/function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Math;
}(); // console.log(Math.sum(1, 25));


function teste(x) {
  var y = 5;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }

  console.log(y);
} // teste(10);


var array = [1, 3, 4, 5, 8, 9, 10];
/*
  O map percorre o vetor(Array) e executa uma ação determinada por nós e retornar uma nova informação, como segundo parâmetro podemos ainda receber o index que é a posição de cada item no array
*/

var newArray = array.map(function (item, index) {
  if (index == 0) {
    return item * 2;
  }

  return item;
}); // console.log(newArray);

/*
  Reduce tem a função de transformar todo o vetor em uma única informação. Recebe como parâmetros o valor total e e como segundo parâmetro o próximo valor.
*/

var reduceArray = array.reduce(function (total, next) {
  return total + next;
}); // console.log(reduceArray);

/*
  É um filtro para o array. No caso do exemplo abaixo eu quero saber quais dos números são pares, se a função retornar true, o filter mantém o número no array e se der false ele remove do array restando apenas os números pares. Obrigatóriamente é necessário que retorne true ou false
*/

var filter = array.filter(function (item) {
  return item % 2 === 0;
}); // console.log(filter);

/* 
 O método find é usado para verificar se existe essa informação no array.
*/

var find = array.find(function (item) {
  return item === 4;
}); // console.log(find);
// Map, reduce, filter e find

var arrayMap = array.map(function (item) {
  return item * 2;
}); // console.log(arrayMap);

var arrayReduce = array.reduce(function (total, next) {
  return total + next;
}); // console.log(arrayReduce);

var arrayFilter = array.filter(function (item) {
  return item % 2 === 0;
}); // console.log(arrayFilter);

var arrayFind = array.find(function (item) {
  return item === 10;
}); // console.log(arrayFind);
// Valores padrões

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
} // console.log(soma(1));
// console.log(soma());


var somaArrow = function somaArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}; // console.log(somaArrow(1));
// console.log(somaArrow());
// Rest -> Serve para pegar o resto das propriedades de um objeto e arrays


var user = {
  name: 'Lucas',
  age: 23,
  enterprise: 'IPlug'
};

var name = user.name,
    resto = _objectWithoutProperties(user, ["name"]); // console.log(name);
// console.log(resto);


var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    rest = arr.slice(2); // console.log(a);
// console.log(b);
// console.log(rest);

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} // console.log(somaRest(1,3,4));
// SPREAD => Repassa os dados de uma estrutura para outra


var array1 = [0, 1, 2, 3];
var array2 = [4, 5, 6, 7];
var array3 = [].concat(array1, array2); // console.log(array3);

var user1 = {
  name: "Lucas",
  age: 23,
  enterprise: "Google"
};

var newUser = _objectSpread(_objectSpread({}, user1), {}, {
  name: "Diego"
});

console.log(newUser);
