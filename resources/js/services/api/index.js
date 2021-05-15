import axios from 'axios';

export const headers = { headers: { 'Accept-Language': 'pt-br' } };

export default axios.create({ baseURL: 'http://localhost:8000/api/' });
