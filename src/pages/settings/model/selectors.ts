import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { changeUserDataFx, $user, $error } from './settings';

export const useOnSubmitPending = (): StoreValue<
  typeof changeUserDataFx.pending
> => useStore(changeUserDataFx.pending);

export const useUser = (): StoreValue<typeof $user> => useStore($user);

export const useError = (): StoreValue<typeof $error> => useStore($error);
