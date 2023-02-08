import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4120/v1', //EXTERNA
    // baseURL: 'http://5.161.116.181:4120/v1', //INTERNA
});


export default api;
