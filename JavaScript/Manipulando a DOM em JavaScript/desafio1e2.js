function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let containerElement = document.querySelector('#app');

let textElement = document.createTextNode('Me pressione');

let button = document.createElement('button');
button.appendChild(textElement);
button.className='btn'

containerElement.appendChild(button);

{/* <button class="btn">Me Pressione</button> */}

function showBox() {
  let buttonElement = document.querySelector('button.btn');

  let boxElement;
  buttonElement.onclick = function() {
    boxElement = document.createElement('div');
    boxElement.setAttribute('class', 'box');
    boxElement.style.padding = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#f00';
    boxElement.addEventListener('mouseover', () => boxElement.style.backgroundColor=getRandomColor());
    boxElement.addEventListener('mouseout', () => boxElement.style.backgroundColor='#f00');

    let containerElement = document.querySelector('#app');
    containerElement.appendChild(boxElement);   
  }
}

showBox();