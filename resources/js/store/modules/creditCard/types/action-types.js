const MODULE_NAME = 'creditCard';

const PAGINATE = 'paginate';
const DELETE = 'delete';

export const actions = {
  PAGINATE,
  DELETE,
};

export const namespacedActions = {
  CREDIT_CARD_PAGINATE: `${MODULE_NAME}/${PAGINATE}`,
  CREDIT_CARD_DELETE: `${MODULE_NAME}/${DELETE}`,
};
