import * as api from 'shared/api';
import * as types from './types';

export const setFavoriteArticle = async ({ slug }: types.SelectedArticle) => {
  const { data } = await api.post<types.ToggleFavoriteArticleResponse>(
    `articles/${slug}/favorite`,
  );

  return data;
};

export const setUnfavoriteArticle = async ({ slug }: types.SelectedArticle) => {
  const { data } = await api.del<types.ToggleFavoriteArticleResponse>(
    `articles/${slug}/favorite`,
  );

  return data;
};
