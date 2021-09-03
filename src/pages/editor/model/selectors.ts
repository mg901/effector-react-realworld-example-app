import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { createArticleFx } from './model';

export const useCreateArticlePending = (): StoreValue<
  typeof createArticleFx.pending
> => useStore(createArticleFx.pending);
