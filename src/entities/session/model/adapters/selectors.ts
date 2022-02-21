import { useStore } from 'effector-react';
import * as store from '../store/store';

export const selectors = {
  useIsAuthorized: () => useStore(store.$isAuthorized),
  useSession: () => useStore(store.$session),
  useError: () => useStore(store.$error),
  useErrorList: () => useStore(store.$errorList),
};
