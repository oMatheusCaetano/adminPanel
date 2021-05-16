import { mutations, namespacedMutations } from './mutation-types';
import { getters, namespacedGetters } from './getter-types';
import { actions, namespacedActions } from './action-types';

export const creditCardNamespacedTypes = {
  ...namespacedActions,
  ...namespacedMutations,
  ...namespacedGetters,
};

export default {
  ...actions,
  ...mutations,
  ...getters,
};
