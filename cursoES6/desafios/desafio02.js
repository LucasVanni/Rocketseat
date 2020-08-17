const users = [
 { nome: 'Diego', idade: 23, empresa: 'RocketSeat' },
 { nome: 'Gabriel', idade: 15, empresa: 'RocketSeat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const mapUser = users.map(item => item.idade);

// console.log(mapUser);

const filterUser = users.filter(item => 
 item.idade > 18 && item.empresa === "RocketSeat"
);

// console.log(filterUser

const findGoogleUser = users.find(item => item.empresa === 'Google');

// console.log(findGoogleUser);

const operation = users.map(users => 
  ( {...users, idade: users.idade * 2} ))
  .filter(item => item.idade <= 50);

console.log(operation);