import { useStore } from 'effector-react';
import * as store from './store/store';

export const selectors = {
  useGetUserLoading: () => useStore(store.getUserFx.pending),
  useUpdateUserLoading: () => useStore(store.updateUserFx.pending),
  useError: () => useStore(store.$error),
  useErrorList: () => useStore(store.$errorList),
};
