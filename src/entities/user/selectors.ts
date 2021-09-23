import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $isAuthorized } from './model';

export const useIsAuth = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);
