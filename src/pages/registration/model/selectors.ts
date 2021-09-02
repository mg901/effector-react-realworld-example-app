import { useStore } from 'effector-react';
import { signUpFx } from './model';

export const useSignUpPending = (): boolean => useStore(signUpFx.pending);
