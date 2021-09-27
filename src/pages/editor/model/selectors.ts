import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { createArticleFx, $error } from './editor';

export const useCreateArticlePending = (): boolean =>
  useStore(createArticleFx.pending);

export const useError = (): StoreValue<typeof $error> => useStore($error);
