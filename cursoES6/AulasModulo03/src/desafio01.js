// Função delay aciona o .then após 1s
const delay = (time) => new Promise(resolve => setTimeout(resolve(console.log(time)), 1000));

  async function  umPorSegundo() {

    await delay('1s');
    await delay('2s');
    await delay('3s');

  }

umPorSegundo();


import axios from 'axios';

async function getUserFromGithub(user) {
  try {
  const response = await axios.get(`https://api.github.com/users/${user}`);
  
    console.log(response.data);
  
  } catch {
    console.log('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

class Github {
   static async getRepositories(repo) {
     try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      
      console.log(response.data);
    } catch {
      console.log('Repositório não existe');
    }
  }
}

Github.getRepositories('rocketseat/unform');
Github.getRepositories('rocketseat/gatsby-themes');

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  }
  catch {
    console.log('Usuário não existe');
  }
 }
 
 buscaUsuario('diego3g');