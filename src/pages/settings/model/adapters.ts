import { useStore } from 'effector-react';
import * as store from './store';

export const selectors = {
  useEditableFields: () => useStore(store.$editableFields),
};
