import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { $isAuthorized, $user } from './user';

export const useIsAuth = (): StoreValue<typeof $isAuthorized> =>
  useStore($isAuthorized);
export const useUser = (): StoreValue<typeof $user> => useStore($user);
