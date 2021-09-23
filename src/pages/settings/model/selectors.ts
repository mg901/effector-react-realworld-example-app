import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { changeUserDataFx, $user } from './model';

export const useOnSubmitPending = (): StoreValue<
  typeof changeUserDataFx.pending
> => useStore(changeUserDataFx.pending);

export const useUser = (): StoreValue<typeof $user> => useStore($user);
