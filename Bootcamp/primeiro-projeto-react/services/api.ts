import axios from 'axios';

const api = axios.create({
    baseURL: 'api.github.com',
});

export default api;
