import axios from 'axios';

export default axios.create({
  baseURL: 'https://rocketseat-node.herokuapp.com/api'
});