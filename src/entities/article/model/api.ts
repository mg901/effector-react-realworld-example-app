import * as http from '@/shared/http';
import * as types from './types';

export const setFavoriteArticle = ({ slug }: types.SelectedArticle) =>
  http.client
    .request<types.SelectedArticleResponse>({
      url: `/articles/${slug}/favorite`,
      method: 'POST',
    })
    .then((response) => response.data);

export const setUnfavoriteArticle = ({ slug }: types.SelectedArticle) =>
  http.client
    .request<types.SelectedArticleResponse>({
      url: `/articles/${slug}/favorite`,
      method: 'DELETE',
    })
    .then((response) => response.data);
