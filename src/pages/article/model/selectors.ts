import { useStore } from 'effector-react';
import { $article, $slug, $canModify } from './model';
import { Article } from './types';

export const useSlug = (): string => useStore($slug);
export const useArticle = (): Article => useStore($article);
export const useCanModify = (): boolean => useStore($canModify);
