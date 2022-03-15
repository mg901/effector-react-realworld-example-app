import { useStore } from 'effector-react';
import * as store from './store';

export const selectors = {
  useCreateArticleLoading: () => useStore(store.getArticleFx.pending),
  useGetArticleLoading: () => useStore(store.getArticleFx.pending),
  useUpdateArticleLoading: () => useStore(store.updateArticleFx.pending),
  useError: () => useStore(store.$error),
  useErrorList: () => useStore(store.$errorList),
};
