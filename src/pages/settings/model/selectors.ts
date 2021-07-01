import { useStore } from 'effector-react';
import { $errors, changeUserDataFx } from './model';
import { Errors } from './types';

export const useErrors = (): Errors => useStore($errors);
export const useOnSubmitPending = (): boolean =>
  useStore(changeUserDataFx.pending);
