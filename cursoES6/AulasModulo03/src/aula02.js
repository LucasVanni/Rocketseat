import axios from 'axios';

class API {
  static async getUserInfo(userName) {
    try {
      const response = await axios.get(`http://api.github.com/users/${userName}`);

      console.log(response);
    } catch {
      console.warn('Erro na API');
    }
  }
}

API.getUserInfo('LucasVanni');