import axios from 'axios';


const API = axios.create({
    baseURL: "http://da77-2804-14c-174-5228-a036-bfd-bcbe-314.ngrok.io/",
  });

export default API;