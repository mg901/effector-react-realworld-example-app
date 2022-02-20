import { api } from '@/shared/api';
import * as types from './types';

export const setFavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return api.request<types.SelectedArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'POST',
  });
};

export const setUnfavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return api.request<types.SelectedArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'DELETE',
  });
};
