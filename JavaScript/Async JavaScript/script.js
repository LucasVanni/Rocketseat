// Ajax é uma requisição assíncrona que realizamos a algum backend.

// Permite que o JavaScript acesse requisições AJAX.
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/LucasVanni');
xhr.send(null);

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText))
  }
}

