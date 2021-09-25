import { useStore } from 'effector-react';
import { createArticleFx } from './model';

export const useCreateArticlePending = (): boolean =>
  useStore(createArticleFx.pending);
