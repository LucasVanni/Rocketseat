var nomes = ["Diego", "Gabriel", "Lucas"];

let containerElement = document.querySelector('#app');

let ulElement = document.createElement('ul');

let liElement1 = document.createElement('li');
let liElement2 = document.createElement('li');
let liElement3 = document.createElement('li');


let Diego = nomes[0];
let textElement1 = document.createTextNode(Diego);  
liElement1.appendChild(textElement1);
ulElement.appendChild(liElement1);

let Gabriel = nomes[1];
let textElement2 = document.createTextNode(Gabriel);  
liElement2.appendChild(textElement2);
ulElement.appendChild(liElement2);


let Lucas = nomes[2];
let textElement3 = document.createTextNode(Lucas);  
liElement3.appendChild(textElement3);
ulElement.appendChild(liElement3);


containerElement.appendChild(ulElement);