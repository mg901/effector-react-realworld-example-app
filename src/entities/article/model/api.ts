import * as http from '@/shared/http';
import * as types from './types';

export const setFavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return http.request<types.ToggleFavoriteArticleResponse>({
    url: `articles/${slug}/favorite`,
    method: 'post',
  });
};

export const setUnfavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return http.request<types.ToggleFavoriteArticleResponse>({
    url: `articles/${slug}/favorite`,
    method: 'delete',
  });
};
