import { useStore } from 'effector-react';
import { changeUserDataFx } from './model';
import { Errors } from './types';

export const useSubmitForm = (): boolean => useStore(changeUserDataFx.pending);
export const useErrors = (): Errors => useErrors();
