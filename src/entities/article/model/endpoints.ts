import * as api from 'shared/api';
import * as types from './types';

export const setFavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return api
    .post<types.ToggleFavoriteArticleResponse>(`articles/${slug}/favorite`)
    .then((response) => response.data);
};

export const setUnfavoriteArticle = ({ slug }: types.SelectedArticle) => {
  return api
    .del<types.ToggleFavoriteArticleResponse>(`articles/${slug}/favorite`)
    .then((response) => response.data);
};
