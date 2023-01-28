import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.DATABASE_URL_API
});

export default instance;
