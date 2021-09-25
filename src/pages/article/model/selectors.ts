import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { getArticleFx, $canModify, $article } from './model';

export const useGetArticlePending = (): boolean =>
  useStore(getArticleFx.pending);

export const useCanModify = (): StoreValue<typeof $canModify> =>
  useStore($canModify);

export const useArticle = (): StoreValue<typeof $article> => useStore($article);
