const MODULE_NAME = 'creditCard';

const SET_CARDS = 'setCards';
const SET_CURRENT_CARD = 'setCurrentCard';
const SET_ERRORS = 'setErrors';
const SET_ERROR = 'setError';

export const mutations = {
  SET_CARDS,
  SET_CURRENT_CARD,
  SET_ERRORS,
  SET_ERROR,
};

export const namespacedMutations = {
  CREDIT_CARD_SET_CARDS: `${MODULE_NAME}/${SET_CARDS}`,
  CREDIT_CARD_SET_CURRENT_CARD: `${MODULE_NAME}/${SET_CURRENT_CARD}`,
  CREDIT_CARD_SET_ERRORS: `${MODULE_NAME}/${SET_ERRORS}`,
  CREDIT_CARD_SET_ERROR: `${MODULE_NAME}/${SET_ERROR}`,
};
