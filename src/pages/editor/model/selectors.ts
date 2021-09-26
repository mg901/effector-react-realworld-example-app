import { useStore } from 'effector-react';
import { createArticleFx } from './editor';

export const useCreateArticlePending = (): boolean =>
  useStore(createArticleFx.pending);
