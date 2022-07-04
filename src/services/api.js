// https://sujeitoprogramador.com/r-api/?api=filmes

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/',
});

export default api;
