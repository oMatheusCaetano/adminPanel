const MODULE_NAME = 'creditCard';

const GET_CARDS = 'getCards';
const GET_CURRENT_CARD = 'getCurrentCard';
const GET_ERRORS = 'getErrors';
const GET_ERROR = 'getError';

export const getters = {
  GET_CARDS,
  GET_CURRENT_CARD,
  GET_ERRORS,
  GET_ERROR,
};

export const namespacedGetters = {

  CREDIT_CARD_GET_CARDS: `${MODULE_NAME}/${GET_CARDS}`,
  CREDIT_CARD_GET_CURRENT_CARD: `${MODULE_NAME}/${GET_CURRENT_CARD}`,
  CREDIT_CARD_GET_ERRORS: `${MODULE_NAME}/${GET_ERRORS}`,
  CREDIT_CARD_GET_ERROR: `${MODULE_NAME}/${GET_ERROR}`,
};
