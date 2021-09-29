import axios from 'axios';
const config = require('./config.json');

const API = axios.create({
    baseURL: config.url,
  });

export default API;