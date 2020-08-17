class todos {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends todos {
  constructor() {
    super();

    this.userName = "Lucas"
  }

  showUser() {
    console.log(this.userName);
  }
}

const lista = new TodoList();

document.getElementById('addTodo').onclick = function() {
  lista.add('Novo Item')
};

// lista.showUser();


class Math {
  static sum(a, b) {
    return a + b;
  }
}

// console.log(Math.sum(1, 25));


function teste(x) {
  let y = 5;

  if( x > 5 ) {
    let y = 4;

    console.log(x, y);
  }

  console.log(y);
}

// teste(10);

const array = [1, 3, 4, 5, 8, 9, 10];
/*
  O map percorre o vetor(Array) e executa uma ação determinada por nós e retornar uma nova informação, como segundo parâmetro podemos ainda receber o index que é a posição de cada item no array
*/

const newArray = array.map(function(item, index) {
  if ( index == 0 ) {
    return item * 2;
  }
  
  return item;
});

// console.log(newArray);

/*
  Reduce tem a função de transformar todo o vetor em uma única informação. Recebe como parâmetros o valor total e e como segundo parâmetro o próximo valor.
*/

const reduceArray = array.reduce((total, next) => {
  return total + next;
});

// console.log(reduceArray);

/*
  É um filtro para o array. No caso do exemplo abaixo eu quero saber quais dos números são pares, se a função retornar true, o filter mantém o número no array e se der false ele remove do array restando apenas os números pares. Obrigatóriamente é necessário que retorne true ou false
*/
const filter = array.filter((item) => {
    return item % 2 === 0;
});

// console.log(filter);

 /* 
  O método find é usado para verificar se existe essa informação no array.
 */
const find = array.find((item) => {
  return item === 4;
});

// console.log(find);


// Map, reduce, filter e find

const arrayMap = array.map(item => item * 2);

// console.log(arrayMap);


const arrayReduce = array.reduce((total, next) => total + next);

// console.log(arrayReduce);

const arrayFilter = array.filter(item => item % 2 === 0);

// console.log(arrayFilter);

const arrayFind = array.find(item => item === 10 );

// console.log(arrayFind);

// Valores padrões

function soma(a = 3, b = 6) {
  return a + b;
}

// console.log(soma(1));
// console.log(soma());

const somaArrow = (a = 3, b = 6) => a + b;

// console.log(somaArrow(1));
// console.log(somaArrow());


// Rest -> Serve para pegar o resto das propriedades de um objeto e arrays
const user =  {
  name: 'Lucas',
  age: 23,
  enterprise: 'IPlug'
};

const {name, ...resto} = user;

// console.log(name);
// console.log(resto);

const arr = [1, 2, 3, 4, 5, 6];

const [a , b, ...rest] = arr; 

// console.log(a);
// console.log(b);
// console.log(rest);

function somaRest(...params) {
  return params.reduce((total, next) => total + next);
}

// console.log(somaRest(1,3,4));

// SPREAD => Repassa os dados de uma estrutura para outra
const array1 = [0,1,2,3];
const array2 = [4,5,6,7];

const array3 = [...array1, ...array2];

// console.log(array3);

const user1 = {
  name: "Lucas",
  age: 23,
  enterprise: "Google"
};

const newUser = {...user1, name: "Diego" };

console.log(newUser);