import axios from 'axios';


const API = axios.create({
    baseURL: "http://4593-177-140-104-200.ngrok.io/",
  });

export default API;