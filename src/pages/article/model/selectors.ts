import { useStore } from 'effector-react';
import { $article, $slug, $canModify, fetchArticleFx } from './model';
import { Article } from './types';

export const useSlug = (): string => useStore($slug);
export const useArticle = (): Article => useStore($article);
export const useCanModify = (): boolean => useStore($canModify);
export const useLoadArticle = (): boolean => useStore(fetchArticleFx.pending);
