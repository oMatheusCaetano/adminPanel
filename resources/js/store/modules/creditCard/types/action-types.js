const MODULE_NAME = 'creditCard';

const PAGINATE = 'paginate';
const DELETE = 'delete';
const CREATE = 'create';
const UPDATE = 'update';

export const actions = {
  PAGINATE,
  DELETE,
  CREATE,
  UPDATE,
};

export const namespacedActions = {
  CREDIT_CARD_PAGINATE: `${MODULE_NAME}/${PAGINATE}`,
  CREDIT_CARD_DELETE: `${MODULE_NAME}/${DELETE}`,
  CREDIT_CARD_CREATE: `${MODULE_NAME}/${CREATE}`,
  CREDIT_CARD_UPDATE: `${MODULE_NAME}/${UPDATE}`,
};
