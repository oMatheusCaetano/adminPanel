import api from '@/services/api';
import types from './types';

const uri = 'credit-card';

function whenApiRequestFail(commit, { data, status }) {
  const errorMessage = data?.error ?? data?.message;
  commit(types.SET_ERRORS, data?.errors ?? []);
  commit(types.SET_ERROR, errorMessage);
  return { result: false, status, message: errorMessage };
}

function whenApiRequestSucceed({ data, status, message }) {
  return {
    data, status, message, result: true,
  };
}

export default {
  async paginate({ commit }) {
    try {
      const { data, status, message } = await api.get(uri);
      commit(types.SET_CARDS, data);
      commit(types.SET_CURRENT_CARD, data.data[0] ?? {});
      return whenApiRequestSucceed({ data, status, message });
    } catch ({ response }) { return whenApiRequestFail(commit, response); }
  },

  async delete({ commit, dispatch, getters }) {
    try {
      const currentCardId = getters[types.GET_CURRENT_CARD].id;
      const { data, status, message } = await api.delete(uri, currentCardId);
      await dispatch(types.PAGINATE);
      return whenApiRequestSucceed({ data, status, message });
    } catch ({ response }) { return whenApiRequestFail(commit, response); }
  },

  async create({ commit, dispatch, getters }, { reload, clearCard }) {
    commit(types.SET_ERROR, '');
    commit(types.SET_ERRORS, []);
    try {
      const card = getters[types.GET_CURRENT_CARD];
      const { data, status, message } = await api.post(uri, card);
      if (reload) await dispatch(types.PAGINATE);
      if (clearCard) commit(types.SET_CURRENT_CARD, {});
      return whenApiRequestSucceed({ data, status, message });
    } catch ({ response }) { return whenApiRequestFail(commit, response); }
  },

  async update({ commit, dispatch, getters }) {
    commit(types.SET_ERROR, '');
    commit(types.SET_ERRORS, []);
    try {
      const card = getters[types.GET_CURRENT_CARD];
      const { data, status, message } = await api.put(uri, card.id, card);
      await dispatch(types.PAGINATE);
      commit(types.SET_CURRENT_CARD, data);
      return whenApiRequestSucceed({ data, status, message });
    } catch ({ response }) { return whenApiRequestFail(commit, response); }
  },
};
