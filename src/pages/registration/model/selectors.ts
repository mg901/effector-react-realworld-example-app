import { useStore } from 'effector-react';
import { signUpFx } from './registration';

export const useSignUpPending = (): boolean => useStore(signUpFx.pending);
