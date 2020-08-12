axios.get('https://api.github.com/users/LucasVanni')  
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error)
  });