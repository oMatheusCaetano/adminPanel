import api, { headers } from '@/services/api';
import types from './types';

const uri = 'credit-card';

export default {
  async paginate({ commit }) {
    try {
      const { data, status } = await api.get(uri, headers);
      commit(types.SET_CARDS, data);
      commit(types.SET_CARD, data.data[0]);
      return { cards: data, result: true, status };
    } catch ({ response }) {
      return {
        result: false,
        status: response?.status,
        messsage: response?.data?.error ?? response?.data?.message,
      };
    }
  },
};
