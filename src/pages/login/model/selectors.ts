import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signInFx } from './model';

export const useSignInPending = (): StoreValue<typeof signInFx.pending> =>
  useStore(signInFx.pending);
