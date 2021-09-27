import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { changeUserDataFx, $user, $hasError, $errors } from './settings';

export const useOnSubmitPending = (): StoreValue<
  typeof changeUserDataFx.pending
> => useStore(changeUserDataFx.pending);

export const useUser = (): StoreValue<typeof $user> => useStore($user);

export const useHasError = (): boolean => useStore($hasError);
export const useErrors = (): StoreValue<typeof $errors> => useStore($errors);
