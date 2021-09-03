import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signUpFx } from './model';

export const useSignUpPending = (): StoreValue<typeof signUpFx.pending> =>
  useStore(signUpFx.pending);
