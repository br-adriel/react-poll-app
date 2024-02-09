import axios from 'axios';

export const api = axios({
  baseURL: import.meta.env.VITE_API_URL,
});
