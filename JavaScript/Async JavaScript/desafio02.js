let input = document.getElementById("input_id");

let buttonElement = document.querySelector('#app button');



let ulElement = document.getElementById('ul_id');

let textElement = document.querySelector('#app h1');



buttonElement.onclick = function() {
  let valueInput = input.value;
  
  if(!valueInput){
    let liElement = document.createElement('li');
    let textNode = document.createTextNode('Carregando...');

    liElement.appendChild(textNode);

    ulElement.appendChild(liElement);
    
  }
  

  axios.get(`https://api.github.com/users/${valueInput}/repos`).then((response) => {
    for(repo of response.data) {
      let text = document.createTextNode(repo.name);
      let liElement = document.createElement('li');

      liElement.appendChild(text);

      ulElement.appendChild(liElement);  
    }
  }).catch(error => {
    alert(error);
  }); 

  
}