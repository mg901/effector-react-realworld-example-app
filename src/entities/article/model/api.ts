import * as http from 'shared/http';
import * as types from './types';

export const setFavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return http
    .post<types.ToggleFavoriteArticleResponse>(`articles/${slug}/favorite`)
    .then((response) => response.data);
};

export const setUnfavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return http
    .del<types.ToggleFavoriteArticleResponse>(`articles/${slug}/favorite`)
    .then((response) => response.data);
};
