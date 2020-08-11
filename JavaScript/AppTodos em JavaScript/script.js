let listElement = document.querySelector('#app ul');
let InputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar JavaScript',
  'Acessar comunidade da RocketSeat'
];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos ) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);
   
    let linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    let pos = todos.indexOf(todo);

    linkElement.setAttribute('onclick', `deleteTodo(${pos})`);

    let linkText = document.createTextNode('Excluir');
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = InputElement.value;
  todos.push(todoText);
  InputElement.value = '';
  renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);

  renderTodos();
}