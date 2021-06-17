import axios from 'axios';

const API = axios.create({
    baseURL: `https://ancient-retreat-04407.herokuapp.com/api/`
  });
export default API;