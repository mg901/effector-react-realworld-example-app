import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $isAuthorized } from './user';

export const useIsAuth = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);
