import axios from 'axios';

const api = axios.create({ baseURL: process.env.MIX_API_URL });
const headers = {
  'Accept-Language': 'pt-br',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default {
  async get(endpoint, queryParams = {}) {
    return api.get(endpoint, { params: queryParams, headers });
  },

  async delete(endpoint, id, data = {}) {
    endpoint = id ? `${endpoint}/${id}` : endpoint;
    return api.delete(endpoint, { data, headers });
  },
};
