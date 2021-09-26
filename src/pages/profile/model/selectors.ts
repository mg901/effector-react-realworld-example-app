import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import * as model from './profile';

export const useIsCurrentUser = (): StoreValue<typeof model.$isCurrentUser> =>
  useStore(model.$isCurrentUser);

export const useCanFollow = (): StoreValue<typeof model.$following> =>
  useStore(model.$following);

export const useIsNotCurrentUser = (): StoreValue<
  typeof model.$isNotCurrentUser
> => useStore(model.$isNotCurrentUser);

export const useProfile = (): StoreValue<typeof model.$profile> =>
  useStore(model.$profile);
